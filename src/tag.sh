#!/bin/sh
jvid () {
  curbranch=`git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/' | tr -d "()"   `
  git push
  git pull --tags
  local new_tag=$(echo jvid-$curbranch-$(date +'%Y%m%d')-$(git tag -l "jvid-$curbranch-$(date +'%Y%m%d')-*" | wc -l | xargs printf '%02d'))
  echo ${new_tag}
  git tag ${new_tag}
  git push origin $new_tag
}

jvid