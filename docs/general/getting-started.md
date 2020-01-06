# Git Repository

Create a Git repository to track all changes made to your files.

# Getting Started

## Create package.json and tsconfig.json files

Right click in the source code folder and "Open with Code". At the command prompt (TERMINAL) type the following.

```
    npm install
```

This command will now create a package.json file.

```
tsc --init
```

This command will now create tsconfig.json file. Locate and edit the tsconfig.json file to contain the following compiler options.

```
{
  "compilerOptions": {
      "target": "es5",
      "module":"umd",
      "sourceMap": true,
      "declaration": true,
      "declarationMap": true,
      "moduleResolution": "node",
      "outDir": "dist",
      "downlevelIteration": false,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "jsx": "react",
      "jsxFactory": "XNode.create",
      "lib": [
          "es6",
          "dom"
      ]
  },
  "include": [
      "src/**/*"
  ],
  "exclude": [
  "node_modules",
  "tests"
  ]
}
```

To enable .jsx format these compiler options are manadatory

```
"jsx": "react",
"jsxFactory": "XNode.create"
```

## Source Code Folder - src

Create a new src folder. Name may vary as per your requirement. All the source code, view model, model files will be kept here. Corresponding compiler option.

```
 "include": [
      "src/**/*"
  ]
```

All the generated javascript will be stored here.

```
"outDir": "dist"
```

## Load all dependancies - Web controls and XF - Controls for Xamarin

```
npm install -s @web-atoms/core @web-atoms/web-controls reflect-metadata
```

The above command will load all the relevant web project dependancies under node_modules.

```
npm install -g typescript tslint @web-atoms/dev-server 
```

The above command will load all the global dependancies applicable across all the projects.


```
npm install -s @web-atoms/date-time @web-atoms/module-loader
```

The above command will load the dependancies to execute the package. 

## Import library path









