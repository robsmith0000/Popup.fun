"use client"

import { Calendar, DollarSign, ThermometerSun } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CityFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="short">1-3 months</SelectItem>
            <SelectItem value="medium">3-6 months</SelectItem>
            <SelectItem value="long">6+ months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <DollarSign className="h-4 w-4" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">{"< $50/day"}</SelectItem>
            <SelectItem value="medium">$50-100/day</SelectItem>
            <SelectItem value="high">{"> $100/day"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <ThermometerSun className="h-4 w-4" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Weather" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cold">Cold ({"< 10°C"})</SelectItem>
            <SelectItem value="mild">Mild (10-20°C)</SelectItem>
            <SelectItem value="warm">Warm (20-30°C)</SelectItem>
            <SelectItem value="hot">{"> 30°C"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

