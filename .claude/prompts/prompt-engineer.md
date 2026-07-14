# Prompt Engineer for Claude Code

Use this prompt when you need Claude Code to analyze the repository guidance and produce a strong implementation prompt for the site.

## Objective
Read the local design and workflow documents first, then generate a clear, actionable prompt for Claude Code that can be used to implement or modify the website.

## Required inputs to review
1. .claude/docs/DESIGN_SYSTEM.md
2. .claude/docs/CLAUDE_WORKFLOW_GUIDE.md
3. The current app structure in src/
4. The current homepage or relevant page files

## Task
Create a polished Claude Code prompt that:
- reflects the design language and content rules from the design system
- follows the workflow guidance from the Claude workflow guide
- is specific enough to avoid vague implementation guesses
- includes clear success criteria and constraints
- mentions the relevant files or sections to update
- tells Claude Code to verify the result after editing

## Output format
Return a single ready-to-use prompt in this structure:

1. Objective
2. Scope
3. Required context to read
4. Implementation instructions
5. Constraints and design rules
6. Success criteria
7. Verification steps

## Quality bar
- Do not produce generic prompts.
- Make the prompt repository-specific.
- Prefer concrete instructions over broad wording.
- If there are gaps, mention them explicitly.
- Keep the prompt suitable for Claude Code to execute directly.