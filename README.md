# Node.js Standard Style

* Inspired and borrowed from [belly-button](https://github.com/continuationlabs/belly-button)*

### Install

```sh
npm install -g node-style
```

### Usage

Run on the current directory and lint files to make sure they follow the node.js
core style rules.

```sh
node-style
```


#### --fix (-f)

```sh
node-style -f
```

Will fix linting issues that it finds.  This won't fix everything, but will
definitely help when you are styling a large codebase.


#### --input (-i)

```sh
node-style -i lib/**.js
```

Will only run linting on the paths that match the input.  You can have multiple
inputs if you want to lint multiple patterns.
