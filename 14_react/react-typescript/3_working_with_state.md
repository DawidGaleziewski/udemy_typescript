When we destructure useState hook it will infer a value.
This may be a problem if we put a empty array as it will infer a never[]

```typescript
// Infers setTodos<never[]>
const [todos, setTodos] = useState([]);
```

As use state is a generic we can correcy this:

```typescript
const [todos, setTodos] = useState<Todos[]>([]);
```
