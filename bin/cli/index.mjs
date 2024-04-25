#! /usr/bin/env node 
import { execa, execaCommand } from 'execa';
import { Command, program } from 'commander';
import { readFile } from 'node:fs/promises';
import { resolve, extname, basename } from 'node:path';
import { existsSync } from 'fs-extra';
import { fileURLToPath } from 'node:url';
import http from 'node:http';
import getPort from 'get-port';

const ROOT_PATH = resolve(fileURLToPath(import.meta.url), "..", "..");
const CURRENT_PATH = process.cwd();

async function getPkgInfo() {
  const pkg = await readFile(resolve(ROOT_PATH, "package.json"), "utf-8");
  return JSON.parse(pkg);
}

async function installAction() {
  await execa("npm", ["--version"]);
}
const install = new Command("install").action(installAction);

const publish = new Command("publish");

const upgrade = new Command("upgrade");

const uninstall = new Command("uninstall");

const unpublish = new Command("unpublish");

const clean = new Command("clean");

async function createAction(projectName, options) {
}
const create = new Command("create").description("create a new project").usage("<name> [options]").argument("<name>", "project name").option("-t, --template", "template", "vanilla").action(createAction);

async function serveAction(entry) {
  const defaultEntries = ["index.html", "App.vue", "App.tsx", "App.svelte"];
  entry = entry || defaultEntries.find((item) => existsSync(resolve(CURRENT_PATH, item)));
  if (!entry)
    throw "";
  extname(entry).slice(1);
  const port = await getPort({ port: [9527, 8e3, 9e3] });
  const server = http.createServer((req, res) => {
  });
  server.listen(port, () => {
    console.log(`server is ready on http://localhost:${port}/`);
  });
}
const serve = new Command("serve").description("run server").usage("[entry] [options]").argument("[entry]", "serve input file").option("-p, --port", "server port", "9527").option("-o, --open", "auto open browser", false).action(serveAction);

async function generateAction() {
}
async function genCompAction(path) {
  if (!/\.(vue|tsx|svelte)$/.test(path))
    return;
  const componentName = basename(path);
  console.log(componentName);
}
async function genTestAction(path) {
}
const generateCommand = new Command("generate").alias("g").action(generateAction);
const subCommands = [
  new Command("comp").argument("<path>", "").action(genCompAction),
  new Command("test").argument("<path>", "").action(genTestAction)
];
subCommands.forEach((subCommand) => generateCommand.addCommand(subCommand));

const analysis = new Command("analysis");

async function addAction() {
}
const add = new Command("add").action(addAction);

const inspect = new Command("inspect");

const info = new Command("info").description("print environment debug info");

const config = new Command("config");

const commands = {
  __proto__: null,
  addCommand: add,
  analysisCommand: analysis,
  cleanCommand: clean,
  configCommand: config,
  createCommand: create,
  generateCommand: generateCommand,
  infoCommand: info,
  inspectCommand: inspect,
  installCommand: install,
  publishCommand: publish,
  serveCommand: serve,
  uninstallCommand: uninstall,
  unpublishCommand: unpublish,
  upgradeCommand: upgrade
};

async function checkVersion() {
  await getPkgInfo();
  execaCommand("node --version");
  execaCommand("npm --version");
}
async function setCommand() {
  const { version, scripts } = await getPkgInfo();
  program.name("yi").version(version).description("yet another frontend command line interface").usage("<command> [options]");
  Object.keys(commands).forEach((name) => {
    const command = Reflect.get(commands, name);
    program.addCommand(command);
  });
  program.configureOutput({
    outputError(msg, write) {
      const pattern = /unknown\scommand\s'(.+)'/;
      if (pattern.test(msg)) {
        msg.match(pattern)[1];
      }
    }
  });
  program.parse(process.argv);
}

async function main() {
  await checkVersion();
  await setCommand();
}
main();
