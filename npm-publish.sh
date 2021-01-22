# add files
git add . -A

# check status: // to see what changes are going to be commited
git status

# commit
git commit . -m 'WIP'

npm publish

git push origin master

# // go to the gh-pages branch
git checkout gh-pages

# // bring gh-pages up to date with master
git rebase master

# // commit the changes
git push origin gh-pages --force

# // return to the master branch
git checkout master
