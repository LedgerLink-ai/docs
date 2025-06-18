# External Documentation Management

This document explains how the Rails Services documentation is managed from an external repository using git submodules.

## Overview

The Rails Services documentation in `docs/rails/services/` is managed as a git submodule from the external repository:
- **Source Repository**: `https://github.com/LedgerLink-ai/rails_services`
- **Source Branch**: `docs/public_docs`
- **Submodule Location**: `external_docs/rails_services/`
- **Symlink Target**: `docs/rails/services/` → `../../../external_docs/rails_services/docs/`

## Setup Architecture

```
/app/Public_docs/docs/
├── external_docs/              # Git submodules directory
│   └── rails_services/         # Rails services submodule
│       └── docs/               # Documentation source files
│           ├── index.md
│           ├── getting-started.md
│           ├── api-reference/
│           └── ...
└── docs/
    └── rails/
        └── services/           # Symbolic link to external_docs/rails_services/docs/
```

## Working with the Submodule

### Initial Setup (Already Done)

```bash
# Add the submodule
git submodule add https://github.com/LedgerLink-ai/rails_services.git external_docs/rails_services

# Switch to the docs branch
cd external_docs/rails_services
git checkout docs/public_docs

# Create symbolic link
cd docs/rails
ln -sf ../../../external_docs/rails_services/docs services
```

### Daily Workflow

#### Pulling Latest Changes

```bash
# Update the submodule to latest from external repo
git submodule update --remote external_docs/rails_services

# Or navigate to submodule and pull directly
cd external_docs/rails_services
git pull origin docs/public_docs
```

#### Making Changes to Services Documentation

```bash
# Navigate to the submodule
cd external_docs/rails_services

# Make your changes to files in the docs/ directory
# Edit files like docs/index.md, docs/getting-started.md, etc.

# Commit and push changes to the external repository
git add docs/
git commit -m "Update services documentation"
git push origin docs/public_docs
```

#### Updating Main Repository

```bash
# Navigate back to main repository root
cd /app/Public_docs/docs

# Add the submodule changes to the main repo
git add external_docs/rails_services

# Commit the submodule update
git commit -m "Update rails services documentation submodule"
git push
```

### Working with Branches

```bash
# Switch submodule to a different branch
cd external_docs/rails_services
git checkout feature/new-docs
cd ../..
git add external_docs/rails_services
git commit -m "Switch services docs to feature branch"

# Switch back to main docs branch
cd external_docs/rails_services
git checkout docs/public_docs
```

## Development Workflow

### When Working Locally

1. **Check submodule status**: `git submodule status`
2. **Update to latest**: `git submodule update --remote`
3. **Start development server**: `npm start`
4. **Edit services docs**: Make changes in `external_docs/rails_services/docs/`
5. **Preview changes**: Changes appear immediately in the dev server

### When Deploying

The symbolic link ensures that Docusaurus automatically includes the latest submodule content in the build.

## File Structure

After setup, the services documentation includes:

```
docs/rails/services/ → external_docs/rails_services/docs/
├── index.md                    # Main services documentation page
├── getting-started.md          # Getting started guide
├── error-handling.md           # Error handling documentation
├── faq.md                      # Frequently asked questions
├── sdks.md                     # SDK documentation
├── status.md                   # API status page
├── webhooks.md                 # Webhook documentation
├── api-reference/              # API reference documentation
│   └── ...
└── integration-guides/         # Integration guides
    └── ...
```

## Troubleshooting

### Submodule Not Updating

```bash
# Force update the submodule
git submodule update --remote --force external_docs/rails_services

# Or reset the submodule
cd external_docs/rails_services
git reset --hard origin/docs/public_docs
```

### Symbolic Link Issues

```bash
# Recreate the symbolic link
rm docs/rails/services
cd docs/rails
ln -sf ../../../external_docs/rails_services/docs services
```

### MDX Compilation Errors

If you see MDX compilation errors during build:
1. Navigate to the submodule: `cd external_docs/rails_services`
2. Fix the MDX syntax errors in the documentation files
3. Commit and push the fixes: `git add . && git commit -m "Fix MDX syntax" && git push`
4. Update the main repository: `cd ../.. && git add external_docs/rails_services && git commit -m "Update submodule"`

### Permission Issues

Ensure the symbolic link has proper permissions:
```bash
# Check link
ls -la docs/rails/services

# Should show: services -> ../../../external_docs/rails_services/docs
```

## Benefits of This Approach

1. **Version Control**: Exact control over which version of external docs is included
2. **Local Editing**: Can make changes directly and commit back to the source repository
3. **Offline Work**: External documentation is available locally
4. **Atomic Updates**: Main repository tracks specific commits of external documentation
5. **Branch Management**: Can switch between different documentation versions/branches
6. **Collaboration**: Multiple team members can work on documentation simultaneously

## Notes

- The submodule tracks a specific commit, not the latest commit automatically
- Use `git submodule update --remote` to get the latest changes
- Always commit submodule updates to the main repository
- The symbolic link maintains the integration with Docusaurus auto-generation
