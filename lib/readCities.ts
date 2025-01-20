import { parse } from 'csv-parse/sync'
import { readFileSync } from 'fs'
import path from 'path'
import { City } from '@/types/city'

export function readCities(): City[] {
  const csvFilePath = path.join(process.cwd(), 'data/cities.csv')
  const fileContent = readFileSync(csvFilePath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  })

  return records.map((record: any) => ({
    ...record,
    communityThemes: record.communityThemes ? 
      record.communityThemes.split(',').map((theme: string) => theme.trim()) : 
      [],
    latitude: record.latitude ? parseFloat(record.latitude) : 0,
    longitude: record.longitude ? parseFloat(record.longitude) : 0,
  }))
} 