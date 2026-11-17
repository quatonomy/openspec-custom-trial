# Purpose

This is a customized version of openspec sdd workflow, the idea is to give developers the power to manually write code and use ai agents to assist in writing code, making them software architects. This concept defies the culture that developers should hand off code to AI and spend large amounts of time reviewing it which leads to fatigue and a lack of quality, creativity and innovation. Developers must feel they have designed the codebase, not just reviewed AI's work.

# Functional Requirements

In no priority order.

1. An engineer can use all openspec skills ('.agents/skills/openspec-%') at they see fit and there is no mandating specific workflows at certain points, it must be fluid, only suggestion are permitted. DONE, NOT TESTED

2. Code is NOT constructed via any of the openspec skills, an engineer must use alternative skills outside of openspec to create code. Openspec skills are to form context, planning and detailed requirements. The apply skill can create any useful tasks to showcase what is to be built but should not suggest strongly typed architectural decisions, at the most it should showcase technical boundaries, restrictions, blockers to overcome and solve. DONE, NOT TESTED

3. Desite this being a forked/customized version, updated versions of OpenSpec by the author should be relatively simple to include in this repository, therefore changes to openspec logic must be as minimal as possible to achieve functional requirement without creating complex maintenance overhead. DONE, NOT TESTED

4. The skills can span multiple codebases, this will act as a monorepo, the src/ directory will contain relevant codebases, the changes/archives will specify clearly which codebases must be touched for features/tasks which could span multiple per change. Specs should follow this same principle. src/ will span an unlimited number of codebases, it will serve a specifc team - e.g a team has their own version of this monorepo named openspec-awesomeTeam1, which will be a monorepo and the src/ directory pointing to only the codebases they are responsible for. Context outside of this will be provided by the engineer when prompted by openspec for clarity on boundaries. DONE, NOT TESTED

5. Add a way to allow for engineering agents to be able to view artifacts - likely the artifacts are added to a Linear item, this contains evidence of testing and how to verify success. I THINK THIS NEEDS TO BE A SEPERATE REPO. THIS WILL MEAN THIS REPO STAYS FOR PLANNING, THE OTHER REPO STAYS FOR ENGINEERING.

6. Ensure threat modelling, security, anything else is considered on eveery explore. ATTEMPTED, NOT TESTED, NEEDS A LOT OF TESTING.

7. Add support to add to Linear and read, Linear should have the 'epic' that is taken as the explore/propose.
