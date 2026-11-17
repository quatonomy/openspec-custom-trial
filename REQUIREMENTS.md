# Purpose

This is a customized version of openspec sdd workflow, the idea is to give developers the power to manually write code and use ai agents to assist in writing code, making them software architects. This concept defies the culture that developers should hand off code to AI and spend large amounts of time reviewing it which leads to fatigue and a lack of quality, creativity and innovation. Developers must feel they have designed the codebase, not just reviewed AI's work.

# Functional Requirements

In no priority order.

1. An engineer can use all openspec skills ('.agents/skills/openspec-%') at they see fit and there is no mandating specific workflows at certain points, it must be fluid, only suggestion are permitted.

2. Code is NOT constructed via any of the openspec skills, an engineer must use alternative skills outside of openspec to create code. Openspec skills are to form context, planning and detailed requirements.

3. Desite this being a forked/customized version, updated versions of OpenSpec by the author should be relatively simple to include in this repository, therefore changes to openspec logic must be as minimal as possible to achieve functional requirement without creating complex maintenance overhead.

4. The openspec folder which contains changes, should be directly in the codebase repo it is editing, not in this monorepo, therefore the openspec skills should look within the src/ directory which will contain the codebases(s) that contain their own specific changes to them. Changes which span multiple repo's should have identifiable directory names across the repo's to showcase it is part of the same change.