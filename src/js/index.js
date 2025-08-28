import $ from "jquery"
import {ethers} from "ethers"
import * as ethcall from "ethcall"
import lodash from "lodash"
import {matchSorter} from "match-sorter"

import "picturefill"
import "utils/errors"
import "utils/validation"
import "utils/quick"
import "core-js/stable"
import "regenerator-runtime/runtime"

import { createAppKitInstance, REOWN_PROJECT_ID, customNetworks, NETWORKS, ETHEREUM_NODE_URL } from './config.js'
import {store} from './appKitStore.js'
import { initializeSubscribers } from './subscribers.js'

window.$ = $
window.ethers = ethers
window.ethcall = ethcall
window.matchSorter = matchSorter
window.asciichart = require("asciichart")
window.AsciiTable = require("./ascii-table")
window.lodash = lodash
window.Diff = require("diff")
window.ETHEREUM_NODE_URL = ETHEREUM_NODE_URL
window.customNetworks = customNetworks
window.NETWORKS = NETWORKS
window.store = store

// 3. Create a AppKit instance safely
let appKitInstance = null;

try {
  appKitInstance = createAppKitInstance();
  window.appKit = appKitInstance;
  
  // Only initialize subscribers if AppKit was created successfully
  if (appKitInstance) {
    initializeSubscribers(appKitInstance);
  }
} catch (error) {
  console.error('Failed to initialize AppKit in index.js:', error);
  // Set a fallback or handle gracefully
  window.appKit = null;
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    if (!REOWN_PROJECT_ID) {
      console.warn('AppKit: Missing REOWN_PROJECT_ID. Skipping AppKit init.')
      return
    }

  } catch (error) {
    console.error('Failed to initialize AppKit:', error)
  }
})

// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
