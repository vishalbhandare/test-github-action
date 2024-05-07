//globalSetup.js
import { FullConfig } from '@playwright/test'
import dotenv from 'dotenv'

export default async function globalSetup(config) {
  dotenv.config({
    path: '.env',
    override: true,
  })
}
