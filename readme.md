## Well, Are we?

> Automated analysis of what frameworks give you 'out of the box'

## How does it work?

For each CLI tool, the following happens

1. First, the 'scaffold' command is run to create a default application 
2. Then the 'build' is run to produce the production ready assets
3. A lightweight server is then spun up pointing at the newly created production app
4. Then we run Lighthouse against the app to gather metrics.

Currently I'm just added JS bundle size as it's of particular interest to me (wanting to begin projects
with as little vendor code as possible to reduce size). But I will add more metrics soon.

## Up next

Once we have the setup to run all of these tools in a uniform way, it will make it easier for
 more automated benchmarks in the future. For example, we could compare hacker-news clones etc using 
 the massive amount of detail you can get out of Lighthouse.
