the tsc --init has created a tsconfig.json file

This is esential file for managing a typescript project

## exclude

Before the last closing brackets we can add array of excluded files from compilation

```json
  },
  "exclude": ["analytics.ts"]
}

```

Widcards will work as well
"\*dev.ts.ts"

very often we want to exclude node_modules from compilation

```json
"exclude": ["node_modules"]
```

## include

Include allows us to target specific files to include in compilation.
It is important to know that if we use include, all non listed files will NOT get compiled

```json
"include": ["app.ts"]
```

If we add include and then exclude we will compile include - exclude files
