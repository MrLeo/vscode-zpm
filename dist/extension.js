module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 插件入口文件
 * @Date: 2019-03-12 16:58:32
 * @LastEditTime: 2019-03-15 12:04:38
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __webpack_require__(1);
// #region 激活插件
function activate(context) {
    commands_1.registerCommands(context);
}
exports.activate = activate;
// #endregion
// #region 销毁插件
function deactivate() { }
exports.deactivate = deactivate;
// #endregion


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 集中导出命令
 * @Date: 2019-03-14 09:49:10
 * @LastEditTime: 2019-03-15 12:05:08
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(4));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 通用方法
 * @Date: 2019-03-13 20:17:45
 * @LastEditTime: 2019-03-15 15:45:57
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(3);
// #endregion
// #region registrableCommands: 可注册的命令构造函数列表
const registrableCommands = [];
// #endregion
// #region command: 修饰器 - 命令类
/**
 * 类修饰器
 * @export
 * @returns {ClassDecorator}
 */
function command() {
    return (target) => {
        registrableCommands.push(target);
    };
}
exports.command = command;
// #endregion
// #region registerCommands: 注册命令
/**
 * 注册命令
 * @export
 * @param {ExtensionContext} context
 */
function registerCommands(context) {
    for (const c of registrableCommands) {
        context.subscriptions.push(new c());
    }
}
exports.registerCommands = registerCommands;
// #endregion
// #region Commands: 枚举 - 命令
var Commands;
(function (Commands) {
    Commands["tag"] = "extension.tag";
})(Commands = exports.Commands || (exports.Commands = {}));
// #endregion
// #region showQuickPick: 显示可选项列表
/**
 * 显示选框
 * @param {QuickPickItem[]} QuickPickList
 * @returns
 */
function showQuickPick(QuickPickList) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                vscode_1.window.showQuickPick(QuickPickList).then(command => {
                    console.log('TCL: showQuickPick -> command', command);
                    resolve(command);
                });
            }
            catch (err) {
                console.log('TCL: catch -> err', err);
                reject(err);
            }
        });
    });
}
exports.showQuickPick = showQuickPick;
// #endregion
// #region getWorkspaceFolders: 获取目录列表
/**
 * 获取目录列表
 */
function getWorkspaceFolders() {
    const workspaceFolders = vscode_1.workspace.workspaceFolders || [];
    console.log('TCL: Tag -> getWorkspaceFolders -> workspaceFolders', workspaceFolders);
    console.log('TCL: Tag -> getWorkspaceFolders -> vscode.workspace.rootPath', vscode_1.workspace.rootPath);
    return workspaceFolders.map(folder => {
        return {
            label: folder.name,
            path: folder.uri.path,
        };
    });
}
exports.getWorkspaceFolders = getWorkspaceFolders;
// #endregion


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Company: 智联招聘
 * @Author: xuebin.me
 * @LastEditors: Leo
 * @version: 0.0.0
 * @Description: 🔖 创建Tag
 * @Date: 2019-03-13 16:04:30
 * @LastEditTime: 2019-03-16 16:11:58
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(3);
const common_1 = __webpack_require__(2);
const simpleGit = __webpack_require__(5);
const semver = __webpack_require__(34);
const dayjs = __webpack_require__(35);
// #endregion
// #region 环境列表选项
exports.COMMAND_DEFINITIONS = [
    {
        label: 'master',
        description: '线上环境',
        versionName: 'version',
    },
    {
        label: 'pre',
        description: '预上线环境',
        versionName: 'version_pre',
    },
    {
        label: 'dev',
        description: 'QA测试环境',
        versionName: 'version_dev',
    },
    {
        label: 'all',
        description: '所有环境',
    },
];
// #endregion
let Tag = class Tag {
    constructor() {
        this._folders = [];
        this._disposable = vscode_1.commands.registerCommand(common_1.Commands.tag, (...args) => __awaiter(this, void 0, void 0, function* () {
            console.log('TCL: Tag -> constructor -> args', args);
            try {
                yield this.quickPickPath();
                yield this.quickPickEnv();
                // tslint:disable-next-line: no-unused-expression
                this._env && (yield this.addTagByTags(this._env));
                console.log('TCL: Tag -> constructor -> path & env', this._path, this._env);
            }
            catch (err) {
                vscode_1.window.showErrorMessage(err.message);
            }
        }));
    }
    get git() {
        if (!this._git) {
            this._git = simpleGit(this._path || process.cwd());
        }
        return this._git;
    }
    // #region 选择目录
    /**
     * 选择目录
     * @memberof Tag
     */
    quickPickPath() {
        return __awaiter(this, void 0, void 0, function* () {
            this._folders = common_1.getWorkspaceFolders();
            if (this._folders.length > 0) {
                if (this._folders.length === 1) {
                    this._path = this._folders[0].path;
                }
                else {
                    let commandFolder = yield common_1.showQuickPick(this._folders);
                    console.log('TCL: Tag -> quickPickPath -> 选择的目录', commandFolder);
                    this._path = commandFolder.path;
                }
            }
        });
    }
    // #endregion
    // #region 选择环境
    /**
     * quickPickEnv
     * @memberof Tag
     */
    quickPickEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            let commandEnv = yield common_1.showQuickPick(exports.COMMAND_DEFINITIONS);
            console.log('TCL: Tag -> quickPickEnv -> 选择的环境', commandEnv);
            this._env = commandEnv.label;
        });
    }
    // #endregion
    // #region 根据Tag列表添加Tag
    /**
     * 根据Tag列表添加Tag
     * @param {string} env master|pre|dev|all
     * @memberof Tag
     */
    addTagByTags(env) {
        return __awaiter(this, void 0, void 0, function* () {
            vscode_1.window.withProgress({
                location: vscode_1.ProgressLocation.Notification,
                title: '创建Tag',
                cancellable: true,
            }, (progress, token) => __awaiter(this, void 0, void 0, function* () {
                token.onCancellationRequested(() => {
                    vscode_1.window.showInformationMessage(`🏷 取消创建`);
                });
                progress.report({ increment: 10, message: '获取所有tag' });
                // const tags = fs.readdirSync('./.git/refs/tags'); // 同步版本的readdir
                yield this.commitAllFiles();
                yield this.git.pull({ '--rebase': 'true' });
                const tags = yield this.git.tags();
                let addTagSingle = (envName) => __awaiter(this, void 0, void 0, function* () {
                    // 当前环境的最大版本号
                    let lastVsersion = '0.0.0';
                    // 当前环境的版本号列表过滤
                    let versions = tags.all.filter((item) => !!item.replace(/^(dev.*|qa|pre|master)-v((\d+\.?)+)-(\d{8})$/gi, (...arg) => {
                        let matchStr = arg[0] || '';
                        let tagEnv = arg[1] || '';
                        progress.report({ message: `格式化版本号: ${matchStr}` });
                        // 因为新老QA的tag前缀不同，为了兼容则根据已经创建的tag前缀来创建，默认QA的tag前缀是dev
                        if (envName === 'dev' && /dev.*|qa/.test(tagEnv)) {
                            envName = tagEnv;
                        }
                        if (tagEnv !== envName) {
                            return '';
                        }
                        // 格式化版本号，将诸如 0.0.01.001 中多余的 0 去掉
                        progress.report({ message: `格式化版本号: ${matchStr}` });
                        let tagVersion = semver.valid(semver.coerce(arg[2].replace(/\.0+(\d|0\.)/g, '.$1'))) ||
                            lastVsersion;
                        // 比较版本号，记录最大版本号
                        progress.report({ message: `比较版本号: ${tagVersion} & ${lastVsersion}` });
                        lastVsersion = semver.gt(tagVersion, lastVsersion) ? tagVersion : lastVsersion;
                        return matchStr;
                    }));
                    console.log('TCL: Tag -> addTagSingle -> versions', versions);
                    vscode_1.window.showInformationMessage(`🏷 当前环境的版本号列表:\r\n${versions.join('    /    ')}`);
                    let version = yield this.generateNewTag(envName, lastVsersion);
                    progress.report({ message: `生成新版本号: ${JSON.stringify(version)}` });
                    yield this.addTag([version]);
                });
                return env === 'all'
                    ? yield Promise.all(exports.COMMAND_DEFINITIONS.map(item => item.versionName ? addTagSingle(item.label) : Promise.resolve()))
                    : [yield addTagSingle(env)];
            }));
        });
    }
    // #endregion
    // #region commit 提交所有未提交的文件
    /**
     * commit 提交所有未提交的文件
     * @memberof Tag
     */
    commitAllFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            let statusSummary = yield this.git.status();
            if (statusSummary.files.length) {
                yield this.git.add('./*');
                yield this.git.commit('🚀🔖');
                vscode_1.window.showWarningMessage('🚨 有未提交的文件变更已提交');
            }
        });
    }
    // #endregion
    // #region 添加Tag
    /**
     * 添加Tag
     * @param {Array<Version>} versions
     * @memberof Tag
     */
    addTag(versions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.git.pull({ '--rebase': 'true' });
            versions.forEach((version) => __awaiter(this, void 0, void 0, function* () {
                yield this.git.addTag(version.tag);
                vscode_1.window.showInformationMessage(`🔖 添加新Tag: ${version.tag}`, version.tag || '');
                yield this.git.push();
            }));
        });
    }
    // #endregion
    // #region 生成新Tag
    /**
     * 生成新Tag
     * @param {string} [env='pre']  master|pre|dev|all
     * @param {string} [version='0.0.0'] 前一个版本号
     * @returns [version='0.0.1'] 新版本号
     * @memberof Tag
     */
    generateNewTag(env = 'pre', version = '0.0.0') {
        return new Promise(resolve => {
            // const major = semver.major(version)
            const minor = semver.minor(version);
            const patch = semver.patch(version);
            const date = dayjs().format('YYYYMMDD');
            const config = { env, version, tag: `${env}-v${version}-${date}` };
            if (patch >= 99) {
                config.version = semver.inc(version, 'minor');
            }
            else if (minor >= 99) {
                config.version = semver.inc(version, 'major');
            }
            else {
                config.version = semver.inc(version, 'patch');
            }
            config.tag = `${env}-v${config.version}-${date}`;
            resolve(config);
        });
    }
};
Tag = __decorate([
    common_1.command()
], Tag);
exports.Tag = Tag;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
   throw new ReferenceError("Promise wrappers must be enabled to use the promise API");
}

function asyncWrapper (fn, git, chain) {
   return function () {
      var args = [].slice.call(arguments);

      if (typeof args[args.length] === 'function') {
         throw new TypeError(
            "Promise interface requires that handlers are not supplied inline, " +
            "trailing function not allowed in call to " + fn);
      }

      return chain.then(function () {
         return new Promise(function (resolve, reject) {
            args.push(function (err, result) {
               if (err) {
                  reject(new Error(err));
               }
               else {
                  resolve(result);
               }
            });

            git[fn].apply(git, args);
         });
      });
   };
}

function syncWrapper (fn, git, api) {
   return function () {
      git[fn].apply(git, arguments);

      return api;
   };
}

function isAsyncCall (fn) {
   return /^[^\)]+then\s*\)/.test(fn) || /\._run\(/.test(fn);
}

module.exports = function (baseDir) {

   var git;
   var chain = Promise.resolve();

   try {
      git = __webpack_require__(6)(baseDir);
   }
   catch (e) {
      chain = Promise.reject(e);
   }

   return Object.keys(git.constructor.prototype).reduce(function (api, fn) {
      if (/^_|then/.test(fn)) {
         return api;
      }

      if (isAsyncCall(git[fn])) {
         api[fn] = asyncWrapper(fn, git, chain);
      }

      else {
         api[fn] = syncWrapper(fn, git, api);
      }

      return api;

   }, {});

};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var Git = __webpack_require__(7);

var ChildProcess = __webpack_require__(32);
var Buffer = __webpack_require__(33).Buffer;
var exists = __webpack_require__(17);

module.exports = function (baseDir) {

    if (baseDir && !exists(baseDir, exists.FOLDER)) {
        throw new Error("Cannot use simple-git on a directory that does not exist.");
    }

    return new Git(baseDir || process.cwd(), ChildProcess, Buffer);
};



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

   'use strict';

   var debug = __webpack_require__(8)('simple-git');
   var deferred = __webpack_require__(16);
   var exists = __webpack_require__(17);
   var NOOP = function () {};

   /**
    * Git handling for node. All public functions can be chained and all `then` handlers are optional.
    *
    * @param {string} baseDir base directory for all processes to run
    *
    * @param {Object} ChildProcess The ChildProcess module
    * @param {Function} Buffer The Buffer implementation to use
    *
    * @constructor
    */
   function Git (baseDir, ChildProcess, Buffer) {
      this._baseDir = baseDir;
      this._runCache = [];

      this.ChildProcess = ChildProcess;
      this.Buffer = Buffer;
   }

   /**
    * @type {string} The command to use to reference the git binary
    */
   Git.prototype._command = 'git';

   /**
    * @type {[key: string]: string} An object of key=value pairs to be passed as environment variables to the
    *                               spawned child process.
    */
   Git.prototype._env = null;

   /**
    * @type {Function} An optional handler to use when a child process is created
    */
   Git.prototype._outputHandler = null;

   /**
    * @type {boolean} Property showing whether logging will be silenced - defaults to true in a production environment
    */
   Git.prototype._silentLogging = /prod/.test("none");

   /**
    * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
    * the system path, or a fully qualified path to the executable.
    *
    * @param {string} command
    * @returns {Git}
    */
   Git.prototype.customBinary = function (command) {
      this._command = command;
      return this;
   };

   /**
    * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
    * a single object to entirely replace the current environment variables.
    *
    * @param {string|Object} name
    * @param {string} [value]
    * @returns {Git}
    */
   Git.prototype.env = function (name, value) {
      if (arguments.length === 1 && typeof name === 'object') {
         this._env = name;
      }
      else {
         (this._env = this._env || {})[name] = value;
      }

      return this;
   };

   /**
    * Sets the working directory of the subsequent commands.
    *
    * @param {string} workingDirectory
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.cwd = function (workingDirectory, then) {
      var git = this;
      var next = Git.trailingFunctionArgument(arguments);

      return this.exec(function () {
         git._baseDir = workingDirectory;
         if (!exists(workingDirectory, exists.FOLDER)) {
            Git.exception(git, 'Git.cwd: cannot change to non-directory "' + workingDirectory + '"', next);
         }
         else {
            next && next(null, workingDirectory);
         }
      });
   };

   /**
    * Sets a handler function to be called whenever a new child process is created, the handler function will be called
    * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
    *
    * @example
    * require('simple-git')
    *    .outputHandler(function (command, stdout, stderr) {
    *       stdout.pipe(process.stdout);
    *    })
    *    .checkout('https://github.com/user/repo.git');
    *
    * @see http://nodejs.org/api/child_process.html#child_process_class_childprocess
    * @see http://nodejs.org/api/stream.html#stream_class_stream_readable
    * @param {Function} outputHandler
    * @returns {Git}
    */
   Git.prototype.outputHandler = function (outputHandler) {
      this._outputHandler = outputHandler;
      return this;
   };

   /**
    * Initialize a git repo
    *
    * @param {Boolean} [bare=false]
    * @param {Function} [then]
    */
   Git.prototype.init = function (bare, then) {
      var commands = ['init'];
      var next = Git.trailingFunctionArgument(arguments);

      if (bare === true) {
         commands.push('--bare');
      }

      return this._run(commands, function (err) {
         next && next(err);
      });
   };

   /**
    * Check the status of the local repo
    *
    * @param {Function} [then]
    */
   Git.prototype.status = function (then) {
      return this._run(
         ['status', '--porcelain', '-b', '-u'],
         Git._responseHandler(then, 'StatusSummary')
      );
   };

   /**
    * List the stash(s) of the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stashList = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || ';;;;';
      var command = [
         "stash",
         "list",
         "--pretty=format:%H %ai %s%d %aN %ae".replace(/\s+/g, splitter) + __webpack_require__(19).COMMIT_BOUNDARY
      ];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
      }

      return this._run(command,
         Git._responseHandler(handler, 'ListLogSummary', splitter)
      );
   };

   /**
    * Stash the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stash = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ["stash"];

      if (Array.isArray(options)) {
         command = command.concat(options);
      }
      else {
         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * Clone a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {String[]} [options] Optional array of options to pass through to the clone command
    * @param {Function} [then]
    */
   Git.prototype.clone = function (repoPath, localPath, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['clone'].concat(Git.trailingArrayArgument(arguments));

      for (var i = 0, iMax = arguments.length; i < iMax; i++) {
         if (typeof arguments[i] === 'string') {
            command.push(arguments[i]);
         }
      }

      return this._run(command, function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Mirror a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {Function} [then]
    */
   Git.prototype.mirror = function (repoPath, localPath, then) {
      return this.clone(repoPath, localPath, ['--mirror'], then);
   };

   /**
    * Moves one or more files to a new destination.
    *
    * @see https://git-scm.com/docs/git-mv
    *
    * @param {string|string[]} from
    * @param {string} to
    * @param {Function} [then]
    */
   Git.prototype.mv = function (from, to, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = [].concat(from);
      command.unshift('mv', '-v');
      command.push(to);

      this._run(command, Git._responseHandler(handler, 'MoveSummary'))
   };

   /**
    * Internally uses pull and tags to get the list of tags then checks out the latest tag.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkoutLatestTag = function (then) {
      var git = this;
      return this.pull(function() {
         git.tags(function(err, tags) {
            git.checkout(tags.latest, then);
         });
      });
   };

   /**
    * Adds one or more files to source control
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.add = function (files, then) {
      return this._run(['add'].concat(files), function (err, data) {
         then && then(err);
      });
   };

   /**
    * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
    * files will be committed.
    *
    * @param {string|string[]} message
    * @param {string|string[]} [files]
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.commit = function (message, files, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = ['commit'];

      [].concat(message).forEach(function (message) {
         command.push('-m', message);
      });

      [].push.apply(command, [].concat(typeof files === "string" || Array.isArray(files) ? files : []));

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(
         command,
         Git._responseHandler(handler, 'CommitSummary')
      );
   };

   /**
    * Gets a function to be used for logging.
    *
    * @param {string} level
    * @param {string} [message]
    *
    * @returns {Function}
    * @private
    */
   Git.prototype._getLog = function (level, message) {
      var log = this._silentLogging ? NOOP : console[level].bind(console);
      if (arguments.length > 1) {
         log(message);
      }
      return log;
   };

   /**
    * Pull the updated contents of the current repo
    *
    * @param {string} [remote] When supplied must also include the branch
    * @param {string} [branch] When supplied must also include the remote
    * @param {Object} [options] Optionally include set of options to merge into the command
    * @param {Function} [then]
    */
   Git.prototype.pull = function (remote, branch, options, then) {
      var command = ["pull"];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(command, Git._responseHandler(handler, 'PullSummary'));
   };

   /**
    * Fetch the updated contents of the current repo.
    *
    * @example
    *   .fetch('upstream', 'master') // fetches from master on remote named upstream
    *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
    *
    * @param {string} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.fetch = function (remote, branch, then) {
      var command = ["fetch"];
      var next = Git.trailingFunctionArgument(arguments);
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      return this._run(
         command,
         Git._responseHandler(next, 'FetchSummary'),
         {
            concatStdErr: true
         }
      );
   };

   /**
    * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
    * a production environment.
    *
    * @param {boolean} silence
    * @returns {Git}
    */
   Git.prototype.silent = function (silence) {
      this._silentLogging = !!silence;
      return this;
   };

   /**
    * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
    * sort the tags by that property instead of using the default semantic versioning sort.
    *
    * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
    *
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.tags = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);

      var command = ['-l'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      var hasCustomSort = command.some(function (option) {
         return /^--sort=/.test(option);
      });

      return this.tag(
         command,
         Git._responseHandler(next, 'TagList', [hasCustomSort])
      );
   };

   /**
    * Rebases the current working copy. Options can be supplied either as an array of string parameters
    * to be sent to the `git rebase` command, or a standard options object.
    *
    * @param {Object|String[]} [options]
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.rebase = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ['rebase'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      })
   };

   /**
    * Reset a repo
    *
    * @param {string|string[]} [mode=soft] Either an array of arguments supported by the 'git reset' command, or the
    *                                        string value 'soft' or 'hard' to set the reset mode.
    * @param {Function} [then]
    */
   Git.prototype.reset = function (mode, then) {
      var command = ['reset'];
      var next = Git.trailingFunctionArgument(arguments);
      if (next === mode || typeof mode === 'string' || !mode) {
         var modeStr = ['mixed', 'soft', 'hard'].includes(mode) ? mode : 'soft';
         command.push('--' + modeStr);
      }
      else if (Array.isArray(mode)) {
         command.push.apply(command, mode);
      }

      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Revert one or more commits in the local working copy
    *
    * @param {string} commit The commit to revert. Can be any hash, offset (eg: `HEAD~2`) or range (eg: `master~5..master~2`)
    * @param {Object} [options] Optional options object
    * @param {Function} [then]
    */
   Git.prototype.revert = function (commit, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['revert'];

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof commit !== 'string') {
         return this.exec(function () {
            next && next(new TypeError("Commit must be a string"));
         });
      }

      command.push(commit);
      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Add a lightweight tag to the head of the current branch
    *
    * @param {string} name
    * @param {Function} [then]
    */
   Git.prototype.addTag = function (name, then) {
      if (typeof name !== "string") {
         return this.exec(function () {
            then && then(new TypeError("Git.addTag requires a tag name"));
         });
      }

      return this.tag([name], then);
   };

   /**
    * Add an annotated tag to the head of the current branch
    *
    * @param {string} tagName
    * @param {string} tagMessage
    * @param {Function} [then]
    */
   Git.prototype.addAnnotatedTag = function (tagName, tagMessage, then) {
      return this.tag(['-a', '-m', tagMessage, tagName], function (err) {
         then && then(err);
      });
   };

   /**
    * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
    * by supplying either a string or array of strings as the `what` parameter.
    *
    * @param {string|string[]} what One or more commands to pass to `git checkout`
    * @param {Function} [then]
    */
   Git.prototype.checkout = function (what, then) {
      var command = ['checkout'];
      command = command.concat(what);

      return this._run(command, function (err, data) {
         then && then(err, !err && this._parseCheckout(data));
      });
   };

   /**
    * Check out a remote branch
    *
    * @param {string} branchName name of branch
    * @param {string} startPoint (e.g origin/development)
    * @param {Function} [then]
    */
   Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
      return this.checkout(['-b', branchName, startPoint], then);
   };

   /**
    * Check out a local branch
    *
    * @param {string} branchName of branch
    * @param {Function} [then]
    */
   Git.prototype.checkoutLocalBranch = function (branchName, then) {
      return this.checkout(['-b', branchName], then);
   };

   /**
    * Delete a local branch
    *
    * @param {string} branchName name of branch
    * @param {Function} [then]
    */
   Git.prototype.deleteLocalBranch = function (branchName, then) {
      return this.branch(['-d', branchName], then);
   };

   /**
    * List all branches
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.branch = function (options, then) {
      var isDelete, responseHandler;
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['branch'];
      if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      if (!arguments.length || next === options) {
         command.push('-a');
      }

      isDelete = ['-d', '-D', '--delete'].reduce(function (isDelete, flag) {
         return isDelete || command.indexOf(flag) > 0;
      }, false);

      if (command.indexOf('-v') < 0) {
         command.splice(1, 0, '-v');
      }

      responseHandler = isDelete
         ? Git._responseHandler(next, 'BranchDeleteSummary', false)
         : Git._responseHandler(next, 'BranchSummary');

      return this._run(command, responseHandler);
   };

   /**
    * Return list of local branches
    *
    * @param {Function} [then]
    */
   Git.prototype.branchLocal = function (then) {
      return this.branch(['-v'], then);
   };

   /**
    * Add config to local git instance
    *
    * @param {string} key configuration key (e.g user.name)
    * @param {string} value for the given key (e.g your name)
    * @param {Function} [then]
    */
   Git.prototype.addConfig = function (key, value, then) {
      return this._run(['config', '--local', key, value], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Executes any command against the git binary.
    *
    * @param {string[]|Object} commands
    * @param {Function} [then]
    *
    * @returns {Git}
    */
   Git.prototype.raw = function (commands, then) {
      var command = [];
      if (Array.isArray(commands)) {
         command = commands.slice(0);
      }
      else {
         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      }

      var next = Git.trailingFunctionArgument(arguments);

      if (!command.length) {
         return this.exec(function () {
            next && next(new Error('Raw: must supply one or more command to execute'), null);
         });
      }

      return this._run(command, function (err, data) {
         next && next(err, !err && data || null);
      });
   };

   /**
    * Add a submodule
    *
    * @param {string} repo
    * @param {string} path
    * @param {Function} [then]
    */
   Git.prototype.submoduleAdd = function (repo, path, then) {
      return this._run(['submodule', 'add', repo, path], function (err) {
         then && then(err);
      });
   };

   /**
    * Update submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleUpdate = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleUpdate: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['update'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Initialize submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleInit = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleInit: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['init'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Call any `git submodule` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.subModule = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.subModule requires an array of arguments"));
         });
      }

      if (options[0] !== 'submodule') {
         options.unshift('submodule');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * List remote
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.listRemote = function (args, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var data = next === args || args === undefined ? [] : args;

      if (typeof data === 'string') {
         this._getLog('warn', 'Git#listRemote: args should be supplied as an array of individual arguments');
      }

      return this._run(['ls-remote'].concat(data), function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Adds a remote to the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
      return this._run(['remote', 'add', remoteName, remoteRepo], function (err) {
         then && then(err);
      });
   };

   /**
    * Removes an entry from the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.removeRemote = function (remoteName, then) {
      return this._run(['remote', 'remove', remoteName], function (err) {
         then && then(err);
      });
   };

   /**
    * Gets the currently available remotes, setting the optional verbose argument to true includes additional
    * detail on the remotes themselves.
    *
    * @param {boolean} [verbose=false]
    * @param {Function} [then]
    */
   Git.prototype.getRemotes = function (verbose, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var args = verbose === true ? ['-v'] : [];

      return this.remote(args, function (err, data) {
         next && next(err, !err && function () {
            return data.trim().split('\n').filter(Boolean).reduce(function (remotes, remote) {
               var detail = remote.trim().split(/\s+/);
               var name = detail.shift();

               if (!remotes[name]) {
                  remotes[name] = remotes[remotes.length] = {
                     name: name,
                     refs: {}
                  };
               }

               if (detail.length) {
                  remotes[name].refs[detail.pop().replace(/[^a-z]/g, '')] = detail.pop();
               }

               return remotes;
            }, []).slice(0);
         }());
      });
   };

   /**
    * Call any `git remote` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.remote = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.remote requires an array of arguments"));
         });
      }

      if (options[0] !== 'remote') {
         options.unshift('remote');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
    * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
    *
    * @param {string} from
    * @param {string} to
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.mergeFromTo = function (from, to, options, then) {
      var commands = [
         from,
         to
      ];
      var callback = Git.trailingFunctionArgument(arguments);

      if (Array.isArray(options)) {
         commands = commands.concat(options);
      }

      return this.merge(commands, callback);
   };

   /**
    * Runs a merge, `options` can be either an array of arguments
    * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
    * or an options object.
    *
    * Conflicts during the merge result in an error response,
    * the response type whether it was an error or success will be a MergeSummary instance.
    * When successful, the MergeSummary has all detail from a the PullSummary
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    * @returns {*}
    *
    * @see ./responses/MergeSummary.js
    * @see ./responses/PullSummary.js
    */
   Git.prototype.merge = function (options, then) {
      var self = this;
      var userHandler = Git.trailingFunctionArgument(arguments) || NOOP;
      var mergeHandler = function (err, mergeSummary) {
         if (!err && mergeSummary.failed) {
            return Git.fail(self, mergeSummary, userHandler);
         }

         userHandler(err, mergeSummary);
      };

      var command = [];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));

      if (command[0] !== 'merge') {
         command.unshift('merge');
      }

      if (command.length === 1) {
         return this.exec(function () {
            then && then(new TypeError("Git.merge requires at least one option"));
         });
      }

      return this._run(command, Git._responseHandler(mergeHandler, 'MergeSummary'), {
         concatStdErr: true
      });
   };

   /**
    * Call any `git tag` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.tag = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.tag requires an array of arguments"));
         });
      }

      if (options[0] !== 'tag') {
         options.unshift('tag');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * Updates repository server info
    *
    * @param {Function} [then]
    */
   Git.prototype.updateServerInfo = function (then) {
      return this._run(["update-server-info"], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Pushes the current committed changes to a remote, optionally specify the names of the remote and branch to use
    * when pushing. Supply multiple options as an array of strings in the first argument - see examples below.
    *
    * @param {string|string[]} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.push = function (remote, branch, then) {
      var command = [];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (command[0] !== 'push') {
         command.unshift('push');
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
    * default configured remote spec.
    *
    * @param {string} [remote]
    * @param {Function} [then]
    */
   Git.prototype.pushTags = function (remote, then) {
      var command = ['push'];
      if (typeof remote === "string") {
         command.push(remote);
      }
      command.push('--tags');

      then = typeof arguments[arguments.length - 1] === "function" ? arguments[arguments.length - 1] : null;

      return this._run(command, function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Removes the named files from source control.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rm = function (files, then) {
      return this._rm(files, '-f', then);
   };

   /**
    * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
    * completely remove the files, use `rm`.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rmKeepLocal = function (files, then) {
      return this._rm(files, '--cached', then);
   };

   /**
    * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
    * size, and type.
    *
    * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.catFile = function (options, then) {
      return this._catFile('utf-8', arguments);
   };

   /**
    * Equivalent to `catFile` but will return the native `Buffer` of content from the git command's stdout.
    *
    * @param {string[]} options
    * @param then
    */
   Git.prototype.binaryCatFile = function (options, then) {
      return this._catFile('buffer', arguments);
   };

   Git.prototype._catFile = function (format, args) {
      var handler = Git.trailingFunctionArgument(args);
      var command = ['cat-file'];
      var options = args[0];

      if (typeof options === 'string') {
         throw new TypeError('Git#catFile: options must be supplied as an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, data);
      }, {
         format: format
      });
   };

   /**
    * Return repository changes.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.diff = function (options, then) {
      var command = ['diff'];

      if (typeof options === 'string') {
         command[0] += ' ' + options;
         this._getLog('warn',
            'Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, data);
      });
   };

   Git.prototype.diffSummary = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['--stat=4096'];

      if (options && options !== next) {
         command.push.apply(command, [].concat(options));
      }

      return this.diff(command, Git._responseHandler(next, 'DiffSummary'));
   };

   /**
    * Wraps `git rev-parse`. Primarily used to convert friendly commit references (ie branch names) to SHA1 hashes.
    *
    * Options should be an array of string options compatible with the `git rev-parse`
    *
    * @param {string|string[]} [options]
    * @param {Function} [then]
    *
    * @see http://git-scm.com/docs/git-rev-parse
    */
   Git.prototype.revparse = function (options, then) {
      var command = ['rev-parse'];

      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#revparse: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, data);
      });
   };

   /**
    * Show various types of objects, for example the file at a certain commit
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.show = function (options, then) {
      var args = [].slice.call(arguments, 0);
      var handler = typeof args[args.length - 1] === "function" ? args.pop() : null;
      var command = ['show'];
      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#show: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * @param {string} mode Required parameter "n" or "f"
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.clean = function (mode, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof mode !== 'string' || !/[nf]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean mode parameter ("n" or "f") is required'));
         });
      }

      if (/[^dfinqxX]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean unknown option found in ' + JSON.stringify(mode)));
         });
      }

      var command = ['clean', '-' + mode];
      if (Array.isArray(options)) {
         command = command.concat(options);
      }

      if (command.some(interactiveMode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean interactive mode is not supported'));
         });
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });

      function interactiveMode (option) {
         if (/^-[^\-]/.test(option)) {
            return option.indexOf('i') > 0;
         }

         return option === '--interactive';
      }
   };

   /**
    * Call a simple function at the next step in the chain.
    * @param {Function} [then]
    */
   Git.prototype.exec = function (then) {
      this._run([], function () {
         typeof then === 'function' && then();
      });
      return this;
   };

   /**
    * Deprecated means of adding a regular function call at the next step in the chain. Use the replacement
    * Git#exec, the Git#then method will be removed in version 2.x
    *
    * @see exec
    * @deprecated
    */
   Git.prototype.then = function (then) {
      this._getLog(
         'warn',
         "\nGit#then is deprecated after version 1.72 and will be removed in version 2.x"
         + "\nPlease switch to using Git#exec to run arbitrary functions as part of the command chain.\n"
      );
      return this.exec(then);
   };

   /**
    * Show commit logs from `HEAD` to the first commit.
    * If provided between `options.from` and `options.to` tags or branch.
    *
    * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
    *
    * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
    *
    * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
    * For any other set of options, supply options as an array of strings to be appended to the git log command.
    *
    * @param {Object|string[]} [options]
    * @param {string} [options.from] The first commit to include
    * @param {string} [options.to] The most recent commit to include
    * @param {string} [options.file] A single file to include in the result
    *
    * @param {Function} [then]
    */
   Git.prototype.log = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || ';';
      var format = opt.format || {
         hash: '%H',
         date: '%ai',
         message: '%s%d',
         author_name: '%aN',
         author_email: '%ae'
      };

      var fields = Object.keys(format);
      var formatstr = fields.map(function (k) {
         return format[k];
      }).join(splitter);
      var command = ["log", "--pretty=format:" + formatstr + __webpack_require__(19).COMMIT_BOUNDARY];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
         opt = {};
      }
      else if (typeof arguments[0] === "string" || typeof arguments[1] === "string") {
         this._getLog('warn',
            'Git#log: supplying to or from as strings is now deprecated, switch to an options configuration object');
         opt = {
            from: arguments[0],
            to: arguments[1]
         };
      }

      if (opt.n || opt['max-count']) {
         command.push("--max-count=" + (opt.n || opt['max-count']));
      }

      if (opt.from && opt.to) {
         command.push(opt.from + "..." + opt.to);
      }

      if (opt.file) {
         command.push("--follow", options.file);
      }

      'splitter n max-count file from to --pretty format'.split(' ').forEach(function (key) {
         delete opt[key];
      });

      Git._appendOptions(command, opt);

      return this._run(command, Git._responseHandler(handler, 'ListLogSummary', [splitter, fields]));
   };

   /**
    * Clears the queue of pending commands and returns the wrapper instance for chaining.
    *
    * @returns {Git}
    */
   Git.prototype.clearQueue = function () {
      this._runCache.length = 0;
      return this;
   };

   /**
    * Check if a pathname or pathnames are excluded by .gitignore
    *
    * @param {string|string[]} pathnames
    * @param {Function} [then]
    */
   Git.prototype.checkIgnore = function (pathnames, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ["check-ignore"];

      if (handler !== pathnames) {
         command = command.concat(pathnames);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && this._parseCheckIgnore(data));
      });
   };

   /**
    * Validates that the current repo is a Git repo.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkIsRepo = function (then) {
      function onError (exitCode, stdErr, done, fail) {
         if (exitCode === 128 && /(Not a git repository|Kein Git-Repository)/i.test(stdErr)) {
            return done(false);
         }

         fail(stdErr);
      }

      function handler (err, isRepo) {
         then && then(err, String(isRepo).trim() === 'true');
      }

      return this._run(['rev-parse', '--is-inside-work-tree'], handler, {onError: onError});
   };

   Git.prototype._rm = function (_files, options, then) {
      var files = [].concat(_files);
      var args = ['rm', options];
      args.push.apply(args, files);

      return this._run(args, function (err) {
         then && then(err);
      });
   };

   Git.prototype._parseCheckout = function (checkout) {
      // TODO
   };

   /**
    * Parser for the `check-ignore` command - returns each
    * @param {string} [files]
    * @returns {string[]}
    */
   Git.prototype._parseCheckIgnore = function (files) {
      return files.split(/\n/g).filter(Boolean).map(function (file) {
         return file.trim()
      });
   };

   /**
    * Schedules the supplied command to be run, the command should not include the name of the git binary and should
    * be an array of strings passed as the arguments to the git binary.
    *
    * @param {string[]} command
    * @param {Function} then
    * @param {Object} [opt]
    * @param {boolean} [opt.concatStdErr=false] Optionally concatenate stderr output into the stdout
    * @param {boolean} [opt.format="utf-8"] The format to use when reading the content of stdout
    * @param {Function} [opt.onError] Optional error handler for this command - can be used to allow non-clean exits
    *                                  without killing the remaining stack of commands
    * @param {number} [opt.onError.exitCode]
    * @param {string} [opt.onError.stdErr]
    *
    * @returns {Git}
    */
   Git.prototype._run = function (command, then, opt) {
      if (typeof command === "string") {
         command = command.split(" ");
      }
      this._runCache.push([command, then, opt || {}]);
      this._schedule();

      return this;
   };

   Git.prototype._schedule = function () {
      if (!this._childProcess && this._runCache.length) {
         var git = this;
         var Buffer = git.Buffer;
         var task = git._runCache.shift();

         var command = task[0];
         var then = task[1];
         var options = task[2];

         debug(command);

         var result = deferred();

         var attempted = false;
         var attemptClose = function attemptClose (e) {

            // closing when there is content, terminate immediately
            if (attempted || stdErr.length || stdOut.length) {
               result.resolve(e);
               attempted = true;
            }

            // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
            if (!attempted) {
               attempted = true;
               setTimeout(attemptClose.bind(this, e), 50);
            }

         };

         var stdOut = [];
         var stdErr = [];
         var spawned = git.ChildProcess.spawn(git._command, command.slice(0), {
            cwd: git._baseDir,
            env: git._env
         });

         spawned.stdout.on('data', function (buffer) {
            stdOut.push(buffer);
         });

         spawned.stderr.on('data', function (buffer) {
            stdErr.push(buffer);
         });

         spawned.on('error', function (err) {
            stdErr.push(new Buffer(err.stack, 'ascii'));
         });

         spawned.on('close', attemptClose);
         spawned.on('exit', attemptClose);

         result.promise.then(function (exitCode) {
            function done (output) {
               then.call(git, null, output);
            }

            function fail (error) {
               Git.fail(git, error, then);
            }

            delete git._childProcess;

            if (exitCode && stdErr.length && options.onError) {
               options.onError(exitCode, Buffer.concat(stdErr).toString('utf-8'), done, fail);
            }
            else if (exitCode && stdErr.length) {
               fail(Buffer.concat(stdErr).toString('utf-8'));
            }
            else {
               if (options.concatStdErr) {
                  [].push.apply(stdOut, stdErr);
               }

               var stdOutput = Buffer.concat(stdOut);
               if (options.format !== 'buffer') {
                  stdOutput = stdOutput.toString(options.format || 'utf-8');
               }

               done(stdOutput);
            }

            process.nextTick(git._schedule.bind(git));
         });

         git._childProcess = spawned;

         if (git._outputHandler) {
            git._outputHandler(command[0], git._childProcess.stdout, git._childProcess.stderr);
         }
      }
   };

   /**
    * Handles an exception in the processing of a command.
    */
   Git.fail = function (git, error, handler) {
      git._getLog('error', error);
      git._runCache.length = 0;
      if (typeof handler === 'function') {
         handler.call(git, error, null);
      }
   };

   /**
    * Given any number of arguments, returns the last argument if it is a function, otherwise returns null.
    * @returns {Function|null}
    */
   Git.trailingFunctionArgument = function (args) {
      var trailing = args[args.length - 1];
      return (typeof trailing === "function") ? trailing : null;
   };

   /**
    * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is null.
    * @returns {Object|null}
    */
   Git.trailingOptionsArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Object]' ? options : null;
   };

   /**
    * Given any number of arguments, returns the trailing options array argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is an empty array.
    * @returns {Array}
    */
   Git.trailingArrayArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Array]' ? options : [];
   };

   /**
    * Mutates the supplied command array by merging in properties in the options object. When the
    * value of the item in the options object is a string it will be concatenated to the key as
    * a single `name=value` item, otherwise just the name will be used.
    *
    * @param {string[]} command
    * @param {Object} options
    * @private
    */
   Git._appendOptions = function (command, options) {
      if (options === null) {
         return;
      }

      Object.keys(options).forEach(function (key) {
         var value = options[key];
         if (typeof value === 'string') {
            command.push(key + '=' + value);
         }
         else {
            command.push(key);
         }
      });
   };

   /**
    * Given the type of response and the callback to receive the parsed response,
    * uses the correct parser and calls back the callback.
    *
    * @param {Function} callback
    * @param {string} type
    * @param {Object[]} [args]
    *
    * @private
    */
   Git._responseHandler = function (callback, type, args) {
      return function (error, data) {
         if (typeof callback !== 'function') {
            return;
         }

         if (error) {
            callback(error, null);
            return;
         }

         var handler = __webpack_require__(20)("./" + type);
         var result = handler.parse.apply(handler, [data].concat(args === undefined ? [] : args));

         callback(null, result);
      };

   };

   /**
    * Marks the git instance as having had a fatal exception by clearing the pending queue of tasks and
    * logging to the console.
    *
    * @param git
    * @param error
    * @param callback
    */
   Git.exception = function (git, error, callback) {
      git._runCache.length = 0;
      if (typeof callback === 'function') {
         callback(error instanceof Error ? error : new Error(error));
      }

      git._getLog('error', error);
   };

   module.exports = Git;

}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(9);
} else {
	module.exports = __webpack_require__(12);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(10)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(11);

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(13);
const util = __webpack_require__(14);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(15);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(10)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


/***/ }),
/* 16 */
/***/ (function(module, exports) {


module.exports = function deferred () {
   var d = {};
   d.promise = new Promise(function (resolve, reject) {
      d.resolve = resolve;
      d.reject = reject
   });

   return d;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var fs = __webpack_require__(18);

function exists (path, isFile, isDirectory) {
   try {
      var matches = false;
      var stat = fs.statSync(path);

      matches = matches || isFile && stat.isFile();
      matches = matches || isDirectory && stat.isDirectory();

      return matches;
   }
   catch (e) {
      if (e.code === 'ENOENT') {
         return false;
      }

      throw e;
   }
}

module.exports = function (path, type) {
   if (!type) {
      return exists(path, true, true);
   }

   return exists(path, type & 1, type & 2);
};

module.exports.FILE = 1;

module.exports.FOLDER = 2;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {


module.exports = ListLogSummary;

/**
 * The ListLogSummary is returned as a response to getting `git().log()` or `git().stashList()`
 *
 * @constructor
 */
function ListLogSummary (all) {
   this.all = all;
   this.latest = all.length && all[0] || null;
   this.total = all.length;
}

/**
 * Detail for each of the log lines
 * @type {ListLogLine[]}
 */
ListLogSummary.prototype.all = null;

/**
 * Most recent entry in the log
 * @type {ListLogLine}
 */
ListLogSummary.prototype.latest = null;

/**
 * Number of items in the log
 * @type {number}
 */
ListLogSummary.prototype.total = 0;

function ListLogLine (line, fields) {
   for (var k = 0; k < fields.length; k++) {
      this[fields[k]] = line[k];
   }
}

ListLogSummary.COMMIT_BOUNDARY = '------------------------ >8 ------------------------';

ListLogSummary.parse = function (text, splitter, fields) {
   fields = fields || ['hash', 'date', 'message', 'author_name', 'author_email'];
   return new ListLogSummary(
      text
         .trim()
         .split(ListLogSummary.COMMIT_BOUNDARY + '\n')
         .map(function (item) {
            return item.replace(ListLogSummary.COMMIT_BOUNDARY, '')
         })
         .filter(Boolean)
         .map(function (item) {
            return new ListLogLine(item.trim().split(splitter), fields);
         })
   );
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BranchDeleteSummary": 21,
	"./BranchDeleteSummary.js": 21,
	"./BranchSummary": 22,
	"./BranchSummary.js": 22,
	"./CommitSummary": 23,
	"./CommitSummary.js": 23,
	"./DiffSummary": 24,
	"./DiffSummary.js": 24,
	"./FetchSummary": 25,
	"./FetchSummary.js": 25,
	"./FileStatusSummary": 26,
	"./FileStatusSummary.js": 26,
	"./ListLogSummary": 19,
	"./ListLogSummary.js": 19,
	"./MergeSummary": 27,
	"./MergeSummary.js": 27,
	"./MoveSummary": 29,
	"./MoveSummary.js": 29,
	"./PullSummary": 28,
	"./PullSummary.js": 28,
	"./StatusSummary": 30,
	"./StatusSummary.js": 30,
	"./TagList": 31,
	"./TagList.js": 31
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports) {


module.exports = BranchDeletion;

function BranchDeletion (branch, hash) {
   this.branch = branch;
   this.hash = hash;
   this.success = hash !== null;
}

BranchDeletion.deleteSuccessRegex = /(\S+)\s+\(\S+\s([^\)]+)\)/;
BranchDeletion.deleteErrorRegex = /^error[^']+'([^']+)'/;

BranchDeletion.parse = function (data, asArray) {
   var result;
   var branchDeletions = data.trim().split('\n').map(function (line) {
         if (result = BranchDeletion.deleteSuccessRegex.exec(line)) {
            return new BranchDeletion(result[1], result[2]);
         }
         else if (result = BranchDeletion.deleteErrorRegex.exec(line)) {
            return new BranchDeletion(result[1], null);
         }
      })
      .filter(Boolean);

   return asArray ? branchDeletions : branchDeletions.pop();
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {


module.exports = BranchSummary;

function BranchSummary () {
   this.detached = false;
   this.current = '';
   this.all = [];
   this.branches = {};
}

BranchSummary.prototype.push = function (current, detached, name, commit, label) {
   if (current) {
      this.detached = detached;
      this.current = name;
   }
   this.all.push(name);
   this.branches[name] = {
      current: current,
      name: name,
      commit: commit,
      label: label
   };
};

BranchSummary.detachedRegex = /^(\*?\s+)\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/;
BranchSummary.branchRegex = /^(\*?\s+)(\S+)\s+([a-z0-9]+)\s(.*)$/;

BranchSummary.parse = function (commit) {
   var branchSummary = new BranchSummary();

   commit.split('\n')
      .forEach(function (line) {
         var detached = true;
         var branch = BranchSummary.detachedRegex.exec(line);
         if (!branch) {
            detached = false;
            branch = BranchSummary.branchRegex.exec(line);
         }

         if (branch) {
            branchSummary.push(
               branch[1].charAt(0) === '*',
               detached,
               branch[2],
               branch[3],
               branch[4]
            );
         }
      });

   return branchSummary;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {


module.exports = CommitSummary;

function CommitSummary () {
   this.branch = '';
   this.commit = '';
   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };
   this.author = null;
}

var COMMIT_BRANCH_MESSAGE_REGEX = /\[([^\s]+) ([^\]]+)/;
var COMMIT_AUTHOR_MESSAGE_REGEX = /\s*Author:\s(.+)/i;

function setBranchFromCommit (commitSummary, commitData) {
   if (commitData) {
      commitSummary.branch = commitData[1];
      commitSummary.commit = commitData[2];
   }
}

function setSummaryFromCommit (commitSummary, commitData) {
   if (commitSummary.branch && commitData) {
      commitSummary.summary.changes = commitData[1] || 0;
      commitSummary.summary.insertions = commitData[2] || 0;
      commitSummary.summary.deletions = commitData[3] || 0;
   }
}

function setAuthorFromCommit (commitSummary, commitData) {
   var parts = commitData[1].split('<');
   var email = parts.pop();

   if (email.indexOf('@') <= 0) {
      return;
   }

   commitSummary.author = {
      email: email.substr(0, email.length - 1),
      name: parts.join('<').trim()
   };
}

CommitSummary.parse = function (commit) {
   var lines = commit.trim().split('\n');
   var commitSummary = new CommitSummary();

   setBranchFromCommit(commitSummary, COMMIT_BRANCH_MESSAGE_REGEX.exec(lines.shift()));

   if (COMMIT_AUTHOR_MESSAGE_REGEX.test(lines[0])) {
      setAuthorFromCommit(commitSummary, COMMIT_AUTHOR_MESSAGE_REGEX.exec(lines.shift()));
   }

   setSummaryFromCommit(commitSummary, /(\d+)[^,]*(?:,\s*(\d+)[^,]*)?(?:,\s*(\d+))?/g.exec(lines.shift()));

   return commitSummary;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {


module.exports = DiffSummary;

/**
 * The DiffSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function DiffSummary () {
   this.files = [];
   this.insertions = 0;
   this.deletions = 0;
}

/**
 * Number of lines added
 * @type {number}
 */
DiffSummary.prototype.insertions = 0;

/**
 * Number of lines deleted
 * @type {number}
 */
DiffSummary.prototype.deletions = 0;

DiffSummary.parse = function (text) {
   var line, handler;

   var lines = text.trim().split('\n');
   var status = new DiffSummary();

   var summary = lines.pop();
   if (summary) {
      summary.trim().split(', ').slice(1).forEach(function (text) {
         var summary = /(\d+)\s([a-z]+)/.exec(text);
         if (summary) {
            status[summary[2].replace(/s$/, '') + 's'] = parseInt(summary[1], 10);
         }
      });
   }

   while (line = lines.shift()) {
      textFileChange(line, status.files) || binaryFileChange(line, status.files);
   }

   return status;
};

function textFileChange (line, files) {
   line = line.trim().match(/^(.+)\s+\|\s+(\d+)\s+([+\-]+)$/);
   if (line) {
      files.push({
         file: line[1].trim(),
         changes: parseInt(line[2], 10),
         insertions: line[3].replace(/\-/g, '').length,
         deletions: line[3].replace(/\+/g, '').length,
         binary: false
      });

      return true;
   }
}

function binaryFileChange (line, files) {
   line = line.match(/^(.+) \| Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
   if (line) {
      files.push({
         file: line[1].trim(),
         before: +line[2],
         after: +line[3],
         binary: true
      });
      return true;
   }
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FetchSummary (raw) {
   this.raw = raw;

   this.remote = null;
   this.branches = [];
   this.tags = [];
}

FetchSummary.parsers = [
   [
      /From (.+)$/, function (fetchSummary, matches) {
         fetchSummary.remote = matches[0];
      }
   ],
   [
      /\* \[new branch\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.branches.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ],
   [
      /\* \[new tag\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.tags.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ]
];

FetchSummary.parse = function (data) {
   var fetchSummary = new FetchSummary(data);

   String(data)
      .trim()
      .split('\n')
      .forEach(function (line) {
         var original = line.trim();
         FetchSummary.parsers.some(function (parser) {
            var parsed = parser[0].exec(original);
            if (parsed) {
               parser[1](fetchSummary, parsed.slice(1));
               return true;
            }
         });
      });

   return fetchSummary;
};

module.exports = FetchSummary;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FileStatusSummary (path, index, working_dir) {
   this.path = path;
   this.index = index;
   this.working_dir = working_dir;

   if ('R' === index + working_dir) {
      var detail = FileStatusSummary.fromPathRegex.exec(path) || [null, path, path];
      this.from = detail[1];
      this.path = detail[2];
   }
}

FileStatusSummary.fromPathRegex = /^(.+) -> (.+)$/;

FileStatusSummary.prototype = {
   path: '',
   from: ''
};

module.exports = FileStatusSummary;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = MergeSummary;

var PullSummary = __webpack_require__(28);

function MergeConflict (reason, file) {
   this.reason = reason;
   this.file = file;
}

MergeConflict.prototype.toString = function () {
   return this.file + ':' + this.reason;
};

function MergeSummary () {
   PullSummary.call(this);

   this.conflicts = [];
   this.merges = [];
}

MergeSummary.prototype = Object.create(PullSummary.prototype);

MergeSummary.prototype.result = 'success';

MergeSummary.prototype.toString = function () {
   if (this.conflicts.length) {
      return 'CONFLICTS: ' + this.conflicts.join(', ');
   }
   return 'OK';
};

Object.defineProperty(MergeSummary.prototype, 'failed', {
   get: function () {
      return this.conflicts.length > 0;
   }
});

MergeSummary.parsers = [
   {
      test: /^Auto-merging\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.merges.push(result[1]);
      }
   },
   {
      test: /^CONFLICT\s+\((.+)\).+ in (.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.conflicts.push(new MergeConflict(result[1], result[2]));
      }
   },
   {
      test: /^Automatic merge failed;\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.reason = result[1];
      }
   }
];

MergeSummary.parse = function (output) {
   let mergeSummary = new MergeSummary();

   output.trim().split('\n').forEach(function (line) {
      for (var i = 0, iMax = MergeSummary.parsers.length; i < iMax; i++) {
         let parser = MergeSummary.parsers[i];

         var result = parser.test.exec(line);
         if (result) {
            parser.handle(result, mergeSummary);
            break;
         }
      }
   });

   let pullSummary = PullSummary.parse(output);
   if (pullSummary.summary.changes) {
      Object.assign(mergeSummary, pullSummary);
   }

   return mergeSummary;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {


module.exports = PullSummary;

/**
 * The PullSummary is returned as a response to getting `git().pull()`
 *
 * @constructor
 */
function PullSummary () {
   this.files = [];
   this.insertions = {};
   this.deletions = {};

   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };

   this.created = [];
   this.deleted = [];
}

/**
 * Array of files that were created
 * @type {string[]}
 */
PullSummary.prototype.created = null;

/**
 * Array of files that were deleted
 * @type {string[]}
 */
PullSummary.prototype.deleted = null;

/**
 * The array of file paths/names that have been modified in any part of the pulled content
 * @type {string[]}
 */
PullSummary.prototype.files = null;

/**
 * A map of file path to number to show the number of insertions per file.
 * @type {Object}
 */
PullSummary.prototype.insertions = null;

/**
 * A map of file path to number to show the number of deletions per file.
 * @type {Object}
 */
PullSummary.prototype.deletions = null;

/**
 * Overall summary of changes/insertions/deletions and the number associated with each
 * across all content that was pulled.
 * @type {Object}
 */
PullSummary.prototype.summary = null;

PullSummary.FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
PullSummary.SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
PullSummary.ACTION_REGEX = /(create|delete) mode \d+ (.+)/;

PullSummary.parse = function (text) {
   var pullSummary = new PullSummary;
   var lines = text.split('\n');

   while (lines.length) {
      var line = lines.shift().trim();
      if (!line) {
         continue;
      }

      update(pullSummary, line) || summary(pullSummary, line) || action(pullSummary, line);
   }

   return pullSummary;
};

function update (pullSummary, line) {

   var update = PullSummary.FILE_UPDATE_REGEX.exec(line);
   if (!update) {
      return false;
   }

   pullSummary.files.push(update[1]);

   var insertions = update[2].length;
   if (insertions) {
      pullSummary.insertions[update[1]] = insertions;
   }

   var deletions = update[3].length;
   if (deletions) {
      pullSummary.deletions[update[1]] = deletions;
   }

   return true;
}

function summary (pullSummary, line) {
   if (!pullSummary.files.length) {
      return false;
   }

   var update = PullSummary.SUMMARY_REGEX.exec(line);
   if (!update || (update[3] === undefined && update[5] === undefined)) {
      return false;
   }

   pullSummary.summary.changes = +update[1] || 0;
   pullSummary.summary.insertions = +update[3] || 0;
   pullSummary.summary.deletions = +update[5] || 0;

   return true;
}

function action (pullSummary, line) {

   var match = PullSummary.ACTION_REGEX.exec(line);
   if (!match) {
      return false;
   }

   var file = match[2];

   if (pullSummary.files.indexOf(file) < 0) {
      pullSummary.files.push(file);
   }

   var container = (match[1] === 'create') ? pullSummary.created : pullSummary.deleted;
   container.push(file);

   return true;
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {


module.exports = MoveSummary;

/**
 * The MoveSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function MoveSummary () {
   this.moves = [];
   this.sources = {};
}

MoveSummary.SUMMARY_REGEX = /^Renaming (.+) to (.+)$/;

MoveSummary.parse = function (text) {
   var lines = text.split('\n');
   var summary = new MoveSummary();

   for (var i = 0, iMax = lines.length, line; i < iMax; i++) {
      line = MoveSummary.SUMMARY_REGEX.exec(lines[i].trim());

      if (line) {
         summary.moves.push({
            from: line[1],
            to: line[2]
         });
      }
   }

   return summary;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {




var FileStatusSummary = __webpack_require__(26);

module.exports = StatusSummary;

/**
 * The StatusSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function StatusSummary () {
   this.not_added = [];
   this.conflicted = [];
   this.created = [];
   this.deleted = [];
   this.modified = [];
   this.renamed = [];
   this.files = [];
   this.staged = [];
}


/**
 * Number of commits ahead of the tracked branch
 * @type {number}
 */
StatusSummary.prototype.ahead = 0;

/**
 * Number of commits behind the tracked branch
 * @type {number}
 */
StatusSummary.prototype.behind = 0;

/**
 * Name of the current branch
 * @type {null}
 */
StatusSummary.prototype.current = null;

/**
 * Name of the branch being tracked
 * @type {string}
 */
StatusSummary.prototype.tracking = null;

/**
 * All files represented as an array of objects containing the `path` and status in `index` and
 * in the `working_dir`.
 *
 * @type {Array}
 */
StatusSummary.prototype.files = null;

/**
 * Gets whether this StatusSummary represents a clean working branch.
 *
 * @return {boolean}
 */
StatusSummary.prototype.isClean = function () {
   return 0 === Object.keys(this).filter(function (name) {
      return Array.isArray(this[name]) && this[name].length;
   }, this).length;
};

StatusSummary.parsers = {
   '##': function (line, status) {
      var aheadReg = /ahead (\d+)/;
      var behindReg = /behind (\d+)/;
      var currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
      var trackingReg = /\.{3}(\S*)/;
      var regexResult;

      regexResult = aheadReg.exec(line);
      status.ahead = regexResult && +regexResult[1] || 0;

      regexResult = behindReg.exec(line);
      status.behind = regexResult && +regexResult[1] || 0;

      regexResult = currentReg.exec(line);
      status.current = regexResult && regexResult[1];

      regexResult = trackingReg.exec(line);
      status.tracking = regexResult && regexResult[1];
   },

   '??': function (line, status) {
      status.not_added.push(line);
   },

   A: function (line, status) {
      status.created.push(line);
   },

   AM: function (line, status) {
      status.created.push(line);
   },

   D: function (line, status) {
      status.deleted.push(line);
   },

   M: function (line, status, indexState) {
      status.modified.push(line);

      if (indexState === 'M') {
         status.staged.push(line);
      }
   },

   R: function (line, status) {
      var detail = /^(.+) -> (.+)$/.exec(line) || [null, line, line];

      status.renamed.push({
         from: detail[1],
         to: detail[2]
      });
   },

   UU: function (line, status) {
      status.conflicted.push(line);
   }
};

StatusSummary.parsers.MM = StatusSummary.parsers.M;

StatusSummary.parse = function (text) {
   var file, linestr;

   var lines = text.trim().split('\n');
   var status = new StatusSummary();

   while (linestr = lines.shift()) {
      file = splitLine(linestr);

      if (!file) {
         continue;
      }

      if (file.handler) {
         file.handler(file.path, status, file.index, file.workingDir);
      }

      if (file.code !== '##') {
         status.files.push(new FileStatusSummary(file.path, file.index, file.workingDir));
      }
   }

   return status;
};


function splitLine (lineStr) {
   var line = lineStr.trim().match(/(..?)(\s+)(.*)/);
   if (!line || !line[1].trim()) {
      line = lineStr.trim().match(/(..?)\s+(.*)/);
   }

   if (!line) {
      return;
   }

   var code = line[1];
   if (line[2].length > 1) {
      code += ' ';
   }
   if (code.length === 1 && line[2].length === 1) {
      code = ' ' + code;
   }

   return {
      raw: code,
      code: code.trim(),
      index: code.charAt(0),
      workingDir: code.charAt(1),
      handler: StatusSummary.parsers[code.trim()],
      path: line[3]
   };
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {


module.exports = TagList;

function TagList (tagList, latest) {
   this.latest = latest;
   this.all = tagList
}

TagList.parse = function (data, customSort) {
   var number = function (input) {
      if (typeof input === 'string') {
         return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
      }

      return 0;
   };

   var tags = data
      .trim()
      .split('\n')
      .map(function (item) { return item.trim(); })
      .filter(Boolean);

   if (!customSort) {
      tags.sort(function (tagA, tagB) {
         var partsA = tagA.split('.');
         var partsB = tagB.split('.');

         if (partsA.length === 1 || partsB.length === 1) {
            return tagA - tagB > 0 ? 1 : -1;
         }

         for (var i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
            var a = number(partsA[i]);
            var b = number(partsB[i]);

            var diff = a - b;
            if (diff) {
               return diff > 0 ? 1 : -1;
            }
         }

         return 0;
      });
   }

   var latest = customSort ? tags[0] : tags.filter(function (tag) { return tag.indexOf('.') >= 0; }).pop();

   return new TagList(tags, latest);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ process.env.NODE_DEBUG &&
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */ debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ };
/* nomin */ else
  /* nomin */ debug = function() {};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    re[i] = new RegExp(src[i]);
}

exports.parse = parse;
function parse(version, options) {
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }

  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  if (version.length > MAX_LENGTH)
    return null;

  var r = options.loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    return null;

  try {
    return new SemVer(version, options);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, options) {
  var v = parse(version, options);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, options) {
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }
  if (version instanceof SemVer) {
    if (version.loose === options.loose)
      return version;
    else
      version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')

  if (!(this instanceof SemVer))
    return new SemVer(version, options);

  debug('SemVer', version, options);
  this.options = options;
  this.loose = !!options.loose;

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);

  if (!m)
    throw new TypeError('Invalid Version: ' + version);

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    throw new TypeError('Invalid major version')

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    throw new TypeError('Invalid minor version')

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    throw new TypeError('Invalid patch version')

  // numberify any prerelease numeric ids
  if (!m[4])
    this.prerelease = [];
  else
    this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          return num;
      }
      return id;
    });

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.options, other);
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.options);

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.options);

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  if (!(other instanceof SemVer))
    other = new SemVer(other, this.options);

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    return -1;
  else if (!this.prerelease.length && other.prerelease.length)
    return 1;
  else if (!this.prerelease.length && !other.prerelease.length)
    return 0;

  var i = 0;
  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      return 0;
    else if (b === undefined)
      return 1;
    else if (a === undefined)
      return -1;
    else if (a === b)
      continue;
    else
      return compareIdentifiers(a, b);
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        this.prerelease = [0];
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            this.prerelease = [identifier, 0];
        } else
          this.prerelease = [identifier, 0];
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, options) {
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose)
      return comp;
    else
      comp = comp.value;
  }

  if (!(this instanceof Comparator))
    return new Comparator(comp, options);

  debug('comparator', comp, options);
  this.options = options;
  this.loose = !!options.loose;
  this.parse(comp);

  if (this.semver === ANY)
    this.value = '';
  else
    this.value = this.operator + this.semver.version;

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    throw new TypeError('Invalid comparator: ' + comp);

  this.operator = m[1];
  if (this.operator === '=')
    this.operator = '';

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    this.semver = ANY;
  else
    this.semver = new SemVer(m[2], this.options.loose);
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.options.loose);

  if (this.semver === ANY)
    return true;

  if (typeof version === 'string')
    version = new SemVer(version, this.options);

  return cmp(version, this.operator, this.semver, this.options);
};

Comparator.prototype.intersects = function(comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options);
    return satisfies(this.value, rangeTmp, options);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options);
    return satisfies(comp.semver, rangeTmp, options);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, options) {
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range;
    } else {
      return new Range(range.raw, options);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options);
  }

  if (!(this instanceof Range))
    return new Range(range, options);

  this.options = options;
  this.loose = !!options.loose;
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.options.loose;
  range = range.trim();
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, this.options);
  }, this).join(' ').split(/\s+/);
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, this.options);
  }, this);

  return set;
};

Range.prototype.intersects = function(range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, options);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, options) {
  return new Range(range, options).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, options) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, options);
  }).join(' ');
}

function replaceTilde(comp, options) {
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }
  var r = options.loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0';

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, options) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, options);
  }).join(' ');
}

function replaceCaret(comp, options) {
  debug('caret', comp, options);
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }
  var r = options.loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      ret = '';
    else if (isX(m))
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    else if (isX(p)) {
      if (M === '0')
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      else
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        pr = '-' + pr;
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1);
        else
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0';
      } else
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0';
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, options);
  }).join(' ');
}

function replaceXRange(comp, options) {
  comp = comp.trim();
  if (!options || typeof options !== 'object')
    options = { loose: !!options, includePrerelease: false }
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        m = 0;
      if (xp)
        p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          M = +M + 1;
        else
          m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, options) {
  debug('replaceStars', comp, options);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    from = '';
  else if (isX(fm))
    from = '>=' + fM + '.0.0';
  else if (isX(fp))
    from = '>=' + fM + '.' + fm + '.0';
  else
    from = '>=' + from;

  if (isX(tM))
    to = '';
  else if (isX(tm))
    to = '<' + (+tM + 1) + '.0.0';
  else if (isX(tp))
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  else if (tpr)
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  else
    to = '<=' + to;

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  if (!version)
    return false;

  if (typeof version === 'string')
    version = new SemVer(version, this.options);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options))
      return true;
  }
  return false;
};

function testSet(set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      return false;
  }

  if (!options)
    options = {}

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          return true;
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, options) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  })
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, options) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  })
  return min;
}

exports.validRange = validRange;
function validRange(range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, options) {
  return outside(version, range, '<', options);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, options) {
  return outside(version, range, '>', options);
}

exports.outside = outside;
function outside(version, range, hilo, options) {
  version = new SemVer(version, options);
  range = new Range(range, options);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, options) {
  var parsed = parse(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce;
function coerce(version) {
  if (version instanceof SemVer)
    return version;

  if (typeof version !== 'string')
    return null;

  var match = version.match(re[COERCE]);

  if (match == null)
    return null;

  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0')); 
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},c={s:f,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$="en",l={};l[$]=d;var m=function(t){return t instanceof D},y=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),n&&(l[t]=n,r=t);else{var i=t.name;l[i]=t,r=i}return e||($=r),r},M=function(t,n,e){if(m(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new D(r)},g=c;g.l=y,g.i=m,g.w=function(t,n){return M(t,{locale:n.$L,utc:n.$u})};var D=function(){function f(t){this.$L=this.$L||y(t.locale,null,!0)||$,this.parse(t)}var c=f.prototype;return c.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(g.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(o);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},c.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},c.$utils=function(){return g},c.isValid=function(){return!("Invalid Date"===this.$d.toString())},c.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},c.isAfter=function(t,n){return M(t)<this.startOf(n)},c.isBefore=function(t,n){return this.endOf(n)<M(t)},c.$g=function(t,n,e){return g.u(t)?this[n]:this.set(e,t)},c.year=function(t){return this.$g(t,"$y",a)},c.month=function(t){return this.$g(t,"$M",u)},c.day=function(t){return this.$g(t,"$W",i)},c.date=function(t){return this.$g(t,"$D","date")},c.hour=function(t){return this.$g(t,"$H",r)},c.minute=function(t){return this.$g(t,"$m",e)},c.second=function(t){return this.$g(t,"$s",n)},c.millisecond=function(n){return this.$g(n,"$ms",t)},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(t,o){var h=this,f=!!g.u(o)||o,c=g.p(t),d=function(t,n){var e=g.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return g.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var D=this.$locale().weekStart||0,S=(l<D?l+7:l)-D;return d(f?y-S:y+(6-S),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},c.endOf=function(t){return this.startOf(t,!1)},c.$set=function(s,o){var h,f=g.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;return this.$d[d]&&this.$d[d]($),this.init(),this},c.set=function(t,n){return this.clone().$set(t,n)},c.add=function(t,o){var h,f=this;t=Number(t);var c=g.p(o),d=function(n,e){var r=f.clone().set("date",1).set(n,e+t);return r.set("date",Math.min(f.$D,r.daysInMonth()))},$=function(n){var e=new Date(f.$d);return e.setDate(e.getDate()+n*t),g.w(e,f)};if(c===u)return d(u,this.$M);if(c===a)return d(a,this.$y);if(c===i)return $(1);if(c===s)return $(7);var l=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,m=this.valueOf()+t*l;return g.w(m,this)},c.subtract=function(t,n){return this.add(-1*t,n)},c.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=i.weekdays,u=i.months,a=function(t,n,e,r){return t&&t[n]||e[n].substr(0,r)},o=function(t){return g.s(n.$H%12||12,t,"0")},f={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:g.s(this.$M+1,2,"0"),MMM:a(i.monthsShort,this.$M,u,3),MMMM:u[this.$M],D:String(this.$D),DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:a(i.weekdaysMin,this.$W,s,2),ddd:a(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:g.s(this.$H,2,"0"),h:o(1),hh:o(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:g.s(this.$m,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return e.replace(h,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):f[t]||r.replace(":","")})},c.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},c.diff=function(t,o,h){var f,c=g.p(o),d=M(t),$=6e4*(d.utcOffset()-this.utcOffset()),l=this-d,m=g.m(this,d);return m=(f={},f[a]=m/12,f[u]=m,f.quarter=m/3,f[s]=(l-$)/6048e5,f[i]=(l-$)/864e5,f[r]=l/36e5,f[e]=l/6e4,f[n]=l/1e3,f)[c]||l,h?m:g.a(m)},c.daysInMonth=function(){return this.endOf(u).$D},c.$locale=function(){return l[this.$L]},c.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=y(t,n,!0),e},c.clone=function(){return g.w(this.toDate(),this)},c.toDate=function(){return new Date(this.$d)},c.toJSON=function(){return this.toISOString()},c.toISOString=function(){return this.$d.toISOString()},c.toString=function(){return this.$d.toUTCString()},f}();return M.prototype=D.prototype,M.extend=function(t,n){return t(n,D,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M.Ls=l,M});


/***/ })
/******/ ]);
//# sourceMappingURL=extension.js.map