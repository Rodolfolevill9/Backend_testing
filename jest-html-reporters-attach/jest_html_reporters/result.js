window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":0,"numPassedTests":2,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":3,"startTime":1694624629522,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1694624634735,"runtime":4884,"slow":false,"start":1694624629851},"testFilePath":"/Users/rodolfo.levillglobant.com/Desktop/Backend_testing/src/test/test.spec.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTrello suite › TC-002 [Post] Create a new List\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m400\u001b[39m\n    Received: \u001b[31m200\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 67 |\u001b[39m         \u001b[36mconst\u001b[39m res \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m _axiosAction\u001b[33m.\u001b[39maxiosPost(\u001b[32m`${listContext}?name=${randomName}&idBoard=${idBoard}&${authParams}`\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 68 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 69 |\u001b[39m         expect(res\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(\u001b[35m400\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 70 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 71 |\u001b[39m         \u001b[90m// GET all board created \u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 72 |\u001b[39m         \u001b[36mconst\u001b[39m getlistCreated \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m _axiosAction\u001b[33m.\u001b[39maxiosGet(\u001b[32m`${boardContext}/7VaH1jGZ/lists/open?${authParams}`\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/test/test.spec.ts\u001b[39m\u001b[0m\u001b[2m:69:28)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Trello suite"],"duration":1869,"failureMessages":[],"fullName":"Trello suite TC-001 [Post] Create a new List","status":"passed","title":"TC-001 [Post] Create a new List"},{"ancestorTitles":["Trello suite"],"duration":1106,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m400\u001b[39m\nReceived: \u001b[31m200\u001b[39m\n    at Object.toBe (/Users/rodolfo.levillglobant.com/Desktop/Backend_testing/src/test/test.spec.ts:69:28)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Trello suite TC-002 [Post] Create a new List","status":"failed","title":"TC-002 [Post] Create a new List"},{"ancestorTitles":["Trello suite"],"duration":1591,"failureMessages":[],"fullName":"Trello suite TC-003 [Post] Create a new List","status":"passed","title":"TC-003 [Post] Create a new List"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/Users/rodolfo.levillglobant.com/Desktop/Backend_testing/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":11,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/Users/rodolfo.levillglobant.com/Desktop/Backend_testing/node_modules/jest-html-reporters/index.js",{}]],"rootDir":"/Users/rodolfo.levillglobant.com/Desktop/Backend_testing","runTestsByPath":false,"seed":457557813,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/Users/rodolfo.levillglobant.com/Desktop/Backend_testing/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1694624634740,"_reporterOptions":{"publicPath":"/Users/rodolfo.levillglobant.com/Desktop/Backend_testing","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})