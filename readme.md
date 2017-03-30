> Automated analysis of what frameworks give you 'out of the box'

This is a follow-up to [JavaScript Framework Battle: ‘Hello World’ in each CLI](https://medium.com/dailyjs/javascript-framework-battle-hello-world-in-each-cli-cfdba8bf5e4b) 

## How does it work?

For each CLI tool, the following happens

1. First, the 'scaffold' command is run to create a default application 
2. Then the 'build' is run to produce the production ready assets
3. A lightweight server is then spun up pointing at the newly created production app
4. Then we run Lighthouse against the app to gather metrics.

Currently I'm just added JS bundle size as it's of particular interest to me (wanting to begin projects
with as little vendor code as possible to reduce size). But I will add more metrics soon.

<!--perf:js-start-->
|Framework|JS Bundle Size (compressed, as served in the browser)|
|---|---|
|Preact|9.29 kB|
|Inferno|17.5 kB|
|Glimmer|34.7 kB|
|Vue|45.9 kB|
|React|47.7 kB|
|Angular|94.6 kB|
|Ember|205 kB|
<!--perf:js-end-->

## Up next

Once we have the setup to run all of these tools in a uniform way, it will make it easier for
 more automated benchmarks in the future. For example, we could compare hacker-news clones etc using 
 the massive amount of detail you can get out of Lighthouse.
 

<!--crossbow-docs-start-->
## Crossbow tasks

The following tasks have been defined by this project's Crossbow configuration.
Run any of them in the following way
 
```shell
$ crossbow run <taskname>
```
|Task name|Description|
|---|---|
|<pre>`glimmer-run`</pre>|Create production Glimmer app & test in lighthouse|
|<pre>`ember-run`</pre>|Create production Ember app & test in lighthouse|
|<pre>`cra-run`</pre>|Create production React app & test in lighthouse|
|<pre>`cpa-run`</pre>|Create production *Preact app & test in lighthouse|
|<pre>`ng-run`</pre>|Create a production NG2 app & test in lighthouse|
|<pre>`vue-run`</pre>|Create a production Vue app & test in lighthouse|
|<pre>`install:global`</pre>|**Alias for:**<br>- `@sh yarn global add create-react-app create-preact-app ember-cli/ember-cli vue-cli @angular/cli perf-battle`|
|<pre>`glimmer:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $GLIMMER_DIR`|
|<pre>`glimmer:init`</pre>|**Alias for:**<br>- `@npm ember new $GLIMMER_DIR -b @glimmer/blueprint`|
|<pre>`glimmer:build`</pre>|**Alias for:**<br>- `@sh cd $GLIMMER_DIR && ember build --environment="production"`|
|<pre>`glimmer:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $GLIMMER_DIR/dist $PORT`|
|<pre>`glimmer:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/glimmer.json`|
|<pre>`glimmer:lighthouse`</pre>|**Alias for:**<br>- `glimmer:perf-battle`<br>- `@cb exit`|
|<pre>`ember:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $EMBER_DIR`|
|<pre>`ember:init`</pre>|**Alias for:**<br>- `@npm ember new $EMBER_DIR`|
|<pre>`ember:build`</pre>|**Alias for:**<br>- `@sh cd $EMBER_DIR && ember build --environment="production"`|
|<pre>`ember:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $EMBER_DIR/dist $PORT`|
|<pre>`ember:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/ember.json`|
|<pre>`ember:lighthouse`</pre>|**Alias for:**<br>- `ember:perf-battle`<br>- `@cb exit`|
|<pre>`cra:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $CRA_DIR`|
|<pre>`cra:init`</pre>|**Alias for:**<br>- `@npm create-react-app $CRA_DIR`|
|<pre>`cra:build`</pre>|**Alias for:**<br>- `@sh cd $CRA_DIR && yarn run build`|
|<pre>`cra:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $CRA_DIR/build $PORT`|
|<pre>`cra:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/cra.json`|
|<pre>`cra:lighthouse`</pre>|**Alias for:**<br>- `cra:perf-battle`<br>- `@cb exit`|
|<pre>`cpa:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $CPA_DIR`|
|<pre>`cpa:init`</pre>|**Alias for:**<br>- `@npm create-preact-app $CPA_DIR`|
|<pre>`cpa:build`</pre>|**Alias for:**<br>- `@sh cd $CPA_DIR && yarn run build`|
|<pre>`cpa:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $CPA_DIR/build $PORT`|
|<pre>`cpa:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/cpa.json`|
|<pre>`cpa:lighthouse`</pre>|**Alias for:**<br>- `cpa:perf-battle`<br>- `@cb exit`|
|<pre>`ng:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $NG_DIR`|
|<pre>`ng:init`</pre>|**Alias for:**<br>- `@npm ng new $NG_DIR`|
|<pre>`ng:build`</pre>|**Alias for:**<br>- `@npm cd $NG_DIR && ng build --aot --target=production`|
|<pre>`ng:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $NG_DIR/dist $PORT`|
|<pre>`ng:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/ng.json`|
|<pre>`ng:lighthouse`</pre>|**Alias for:**<br>- `ng:perf-battle`<br>- `@cb exit`|
|<pre>`vue:clean`</pre>|**Alias for:**<br>- `@sh rm -rf $VUE_DIR`|
|<pre>`vue:init`</pre>|**Alias for:**<br>- `@npm vue init webpack $VUE_DIR`|
|<pre>`vue:build`</pre>|**Alias for:**<br>- `@npm cd $VUE_DIR && yarn && yarn run build`|
|<pre>`vue:serve`</pre>|**Alias for:**<br>- `@sh pushstate-server $VUE_DIR/dist $PORT`|
|<pre>`vue:perf-battle`</pre>|**Alias for:**<br>- `@npm perf-battle http://localhost:$PORT --reporter size --output json --outFile results/vue.json`|
|<pre>`vue:lighthouse`</pre>|**Alias for:**<br>- `vue:perf-battle`<br>- `@cb exit`|
<!--crossbow-docs-end-->