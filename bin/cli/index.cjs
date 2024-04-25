#! /usr/bin/env node 
'use strict';

const execa = require('execa');
const commander = require('commander');
const promises = require('node:fs/promises');
const node_path = require('node:path');
const fsExtra = require('fs-extra');
const node_url = require('node:url');
const http = require('node:http');
const getPort = require('get-port');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const http__default = /*#__PURE__*/_interopDefaultCompat(http);
const getPort__default = /*#__PURE__*/_interopDefaultCompat(getPort);

const ROOT_PATH = node_path.resolve(node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('cli/index.cjs', document.baseURI).href))), "..", "..");
const CURRENT_PATH = process.cwd();

async function getPkgInfo() {
  const pkg = await promises.readFile(node_path.resolve(ROOT_PATH, "package.json"), "utf-8");
  return JSON.parse(pkg);
}

async function installAction() {
  await execa.execa("npm", ["--version"]);
}
const install = new commander.Command("install").action(installAction);

const publish = new commander.Command("publish");

const upgrade = new commander.Command("upgrade");

const uninstall = new commander.Command("uninstall");

const unpublish = new commander.Command("unpublish");

const clean = new commander.Command("clean");

async function createAction(projectName, options) {
}
const create = new commander.Command("create").description("create a new project").usage("<name> [options]").argument("<name>", "project name").option("-t, --template", "template", "vanilla").action(createAction);

async function serveAction(entry) {
  const defaultEntries = ["index.html", "App.vue", "App.tsx", "App.svelte"];
  entry = entry || defaultEntries.find((item) => fsExtra.existsSync(node_path.resolve(CURRENT_PATH, item)));
  if (!entry)
    throw "";
  node_path.extname(entry).slice(1);
  const port = await getPort__default({ port: [9527, 8e3, 9e3] });
  const server = http__default.createServer((req, res) => {
  });
  server.listen(port, () => {
    console.log(`server is ready on http://localhost:${port}/`);
  });
}
const serve = new commander.Command("serve").description("run server").usage("[entry] [options]").argument("[entry]", "serve input file").option("-p, --port", "server port", "9527").option("-o, --open", "auto open browser", false).action(serveAction);

async function generateAction() {
}
async function genCompAction(path) {
  if (!/\.(vue|tsx|svelte)$/.test(path))
    return;
  const componentName = node_path.basename(path);
  console.log(componentName);
}
async function genTestAction(path) {
}
const generateCommand = new commander.Command("generate").alias("g").action(generateAction);
const subCommands = [
  new commander.Command("comp").argument("<path>", "").action(genCompAction),
  new commander.Command("test").argument("<path>", "").action(genTestAction)
];
subCommands.forEach((subCommand) => generateCommand.addCommand(subCommand));

const analysis = new commander.Command("analysis");

async function addAction() {
}
const add = new commander.Command("add").action(addAction);

const inspect = new commander.Command("inspect");

const info = new commander.Command("info").description("print environment debug info");

const config = new commander.Command("config");

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
  execa.execaCommand("node --version");
  execa.execaCommand("npm --version");
}
async function setCommand() {
  const { version, scripts } = await getPkgInfo();
  commander.program.name("yi").version(version).description("yet another frontend command line interface").usage("<command> [options]");
  Object.keys(commands).forEach((name) => {
    const command = Reflect.get(commands, name);
    commander.program.addCommand(command);
  });
  commander.program.configureOutput({
    outputError(msg, write) {
      const pattern = /unknown\scommand\s'(.+)'/;
      if (pattern.test(msg)) {
        msg.match(pattern)[1];
      }
    }
  });
  commander.program.parse(process.argv);
}

async function main() {
  await checkVersion();
  await setCommand();
}
main();
