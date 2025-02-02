currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/tests/cases/fourslash/server/a.ts]
export var test = "test String"

//// [/tests/cases/fourslash/server/b.ts]
export var test2 = "test String"

//// [/tests/cases/fourslash/server/tsconfig.json]
{ "files": ["a.ts", "c.ts", "b.ts"] }


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/a.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] Search path: /tests/cases/fourslash/server
Info seq  [hh:mm:ss:mss] For info: /tests/cases/fourslash/server/a.ts :: Config file name: /tests/cases/fourslash/server/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tests/cases/fourslash/server/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/tsconfig.json 2000 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tests/cases/fourslash/server/tsconfig.json",
        "reason": "Creating possible configured project for /tests/cases/fourslash/server/a.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /tests/cases/fourslash/server/tsconfig.json : {
 "rootNames": [
  "/tests/cases/fourslash/server/a.ts",
  "/tests/cases/fourslash/server/c.ts",
  "/tests/cases/fourslash/server/b.ts"
 ],
 "options": {
  "configFilePath": "/tests/cases/fourslash/server/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tests/cases/fourslash/server/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/package.json 2000 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/package.json 2000 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/c.ts 500 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules/@types 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/server/node_modules/@types 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules/@types 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /tests/cases/fourslash/node_modules/@types 1 undefined Project: /tests/cases/fourslash/server/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tests/cases/fourslash/server/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tests/cases/fourslash/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/tests/cases/fourslash/server/a.ts SVC-1-0 "export var test = \"test String\""
	/tests/cases/fourslash/server/b.ts Text-1 "export var test2 = \"test String\""


	../../../../lib.d.ts
	  Default library for target 'es5'
	../../../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../../lib.d.ts'
	../../../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../../lib.d.ts'
	a.ts
	  Part of 'files' list in tsconfig.json
	b.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tests/cases/fourslash/server/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/tests/cases/fourslash/server/a.ts",
        "configFile": "/tests/cases/fourslash/server/tsconfig.json",
        "diagnostics": [
          {
            "text": "File '/tests/cases/fourslash/server/c.ts' not found.\n  The file is in the program because:\n    Part of 'files' list in tsconfig.json",
            "code": 6053,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 1,
                    "offset": 21
                  },
                  "end": {
                    "line": 1,
                    "offset": 27
                  },
                  "file": "/tests/cases/fourslash/server/tsconfig.json"
                },
                "message": "File is matched by 'files' list specified here.",
                "category": "message",
                "code": 1410
              }
            ]
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tests/cases/fourslash/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tests/cases/fourslash/server/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tests/cases/fourslash/server/tsconfig.json
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/tests/cases/fourslash/package.json: *new*
  {"pollingInterval":2000}
/tests/cases/fourslash/server/b.ts: *new*
  {"pollingInterval":500}
/tests/cases/fourslash/server/c.ts: *new*
  {"pollingInterval":500}
/tests/cases/fourslash/server/package.json: *new*
  {"pollingInterval":2000}
/tests/cases/fourslash/server/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/tests/cases/fourslash/node_modules: *new*
  {}
/tests/cases/fourslash/node_modules/@types: *new*
  {}
/tests/cases/fourslash/server/node_modules: *new*
  {}
/tests/cases/fourslash/server/node_modules/@types: *new*
  {}

Projects::
/tests/cases/fourslash/server/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tests/cases/fourslash/server/tsconfig.json
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tests/cases/fourslash/server/tsconfig.json
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tests/cases/fourslash/server/tsconfig.json
/tests/cases/fourslash/server/a.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tests/cases/fourslash/server/tsconfig.json *default*
/tests/cases/fourslash/server/b.ts *new*
    version: Text-1
    containingProjects: 1
        /tests/cases/fourslash/server/tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/a.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] Project '/tests/cases/fourslash/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tests/cases/fourslash/server/a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tests/cases/fourslash/server/tsconfig.json
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/tests/cases/fourslash/server/a.ts",
        "needFileNameList": true
      },
      "command": "projectInfo"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "projectInfo",
      "request_seq": 2,
      "success": true,
      "body": {
        "configFileName": "/tests/cases/fourslash/server/tsconfig.json",
        "languageServiceDisabled": false,
        "fileNames": [
          "/lib.d.ts",
          "/lib.decorators.d.ts",
          "/lib.decorators.legacy.d.ts",
          "/tests/cases/fourslash/server/a.ts",
          "/tests/cases/fourslash/server/b.ts",
          "/tests/cases/fourslash/server/tsconfig.json"
        ]
      }
    }