import React from 'react'
import { keywordList } from './keywordList'

export function collectKeyword(district){
  for(let i=0; i<keywordList.length; i++) {
    if(keywordList[i].district === district) {
      return keywordList[i].value;
    }
  }
}