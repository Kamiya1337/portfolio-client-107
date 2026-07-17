# Graph Report - portfolio-client-64  (2026-07-09)

## Corpus Check
- 18 files · ~5,043 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 66 nodes · 82 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `portfolioData` - 7 edges
2. `scripts` - 5 edges
3. `AssignmentCard()` - 3 edges
4. `App()` - 2 edges
5. `isAvailable()` - 2 edges
6. `AssignmentDetail()` - 2 edges
7. `EvidenceTable()` - 2 edges
8. `Hero()` - 2 edges
9. `HomeTab()` - 2 edges
10. `ProjectsTab()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (13 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.36
Nodes (4): AssignmentCard(), isAvailable(), AssignmentDetail(), ProjectsTab()

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (13): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.50
Nodes (3): EvidenceTable(), App(), tabTitles

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (3): Hero(), HomeTab(), modules

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (8): dependencies, framer-motion, gsap, @gsap/react, lenis, lucide-react, react, react-dom

### Community 6 - "Community 6"
Cohesion: 0.38
Nodes (3): navItems, Sidebar(), portfolioData

## Knowledge Gaps
- **31 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 1` to `Community 2`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._