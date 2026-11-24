
## INSTALL

#### MacOS
````brew install openspec````

#### Windows
1. Get a Mac
2. Throw out Windows machine
3. Return back to MacOS install steps

## HOW TO USE

### 1. Explore
````/openspec-explore````
- Assists in taking idea and forming high level view of change before starting a formal proposal

### 2. Propose
````/openspec-propose````
- Prompts for clarification of change
- Constructs specs, proposal, design and tasks

### 3. Develop
- Select the **Developer** agent in the agent picker for engineer-led development.
- Use AI to help constuct high quality code layers
- Do not hand over coding tasks entirely to AI
- Engineers are accountable for code, not AI
- Engineers must have context of code to make high quality decisions
- Engineers that spend a large % of time reviewing AI code will fatigue and quality will reduce
- Engineers that are bored will be less creative and innovative

If risks are understood an option to use is 'apply' to automatically construct the code via openspec, not recommended for production code.
````/openspec-apply-change````

For an independent pull request review, select the **Reviewer** agent and
provide a PR number or URL, or the exact local base and head. It reports
findings without editing code or submitting a GitHub review.

### 4. QA sign-off

Select the **Tester** agent in the agent picker, then invoke
`/qa-sign-off <change-name>`. This separate workflow
uses the change documents to prepare functional and non-functional test cases,
run agreed checks, and save results and evidence under the change's `qa/runs/`.
It reports gaps and recommends readiness; an authorised human makes the sign-off
decision. It does not configure a pipeline gate.

### 5. Archive
````/openspec-archive````
- Archives the change
- Sync's specs & updates relevant docs

## LATEST APPROVED VERSION

````openspec@v2.1.1````