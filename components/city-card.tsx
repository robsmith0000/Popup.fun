import { Calendar, Globe,  Users, XIcon, Tent } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import { City } from "@/types/city"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import React from "react"

// interface CityCardProps extends City {}

interface CityCardProps {
  "Popup Name": string
  Location: string
  "Start Date": string
  "End Date": string
  "Website Link": string
  TLDR: string
  Organizers: string
  "Community Themes": string
  "X Link": string
  "Organizer Type": string
  "Application Process": string
  Image: string
  Latitude: number
  Longitude: number
} 

interface OrganizerWithLink {
  name: string;
  link?: string;
}

function parseOrganizers(organizers: string): OrganizerWithLink[] {
  return organizers.split(',').map(org => {
    const match = org.trim().match(/(.*?)\[(.*?)\]/)
    if (match) {
      return {
        name: match[1].trim(),
        link: match[2]
      }
    }
    return {
      name: org.trim()
    }
  })}


  function convertDateToString(dateString: string): string {
    const [day, month, year] = dateString.split("-").map(Number);
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    return !dateString ? '' : `${day} ${monthNames[month - 1]}, ${year}`;
  }


export function CityCard({
  "Popup Name": popupName,
  Location: location,
  "Start Date": startDate,
  "End Date": endDate,
  "Website Link": websiteLink,
  TLDR: tldr,
  Organizers: organizers,
  "Community Themes": communityThemes,
  "X Link": xLink,
  "Organizer Type": organizerType,
  "Application Process": applicationProcess,
  Image: image,
}: CityCardProps) {
  const parsedOrganizers = parseOrganizers(organizers)
  const formattedStartDate = convertDateToString(startDate)
  const formattedEndDate = convertDateToString(endDate)
  console.log("Community Themes:", typeof communityThemes)
  const themes = communityThemes.split(',').map(theme => theme.trim())
  console.log("Themes:", typeof themes, themes)

  return (
    <Dialog>
      <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer">
        <DialogTrigger className="w-full text-left">
          <div className="relative aspect-[16/9]">
            <Image 
              src={image ? `/cities/${image}` : "/placeholder.svg"}
              alt={`${popupName}, ${location}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>{popupName}</span>
              <span className="text-muted-foreground text-sm font-normal">{location}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-1">
                {themes.map((theme) => (
                  <Badge key={theme} variant="secondary" className="text-xs">
                    {theme}
                  </Badge>
                ))}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{formattedStartDate} - {formattedEndDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tent className="h-4 w-4 text-muted-foreground" />
                  {organizerType.split(',').map((type, index) => (
                    <span key={index}>
                      {index > 0 && ', '}
                      {type.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </DialogTrigger>
      </Card>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{popupName}</DialogTitle>
          <DialogDescription>{location}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-muted-foreground">{tldr}</p>
          <div className="flex flex-wrap gap-1">
            {themes.map((theme) => (
              <Badge key={theme} variant="secondary" className="text-xs">
                {theme}
              </Badge>
            ))}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{formattedStartDate} - {formattedEndDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tent className="h-4 w-4 text-muted-foreground" />
              {organizerType.split(',').map((type, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  {type.trim()}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>
                {parsedOrganizers.map((org, index) => (
                  <React.Fragment key={org.name}>
                    {index > 0 && ', '}
                    {org.link ? (
                      <Link 
                        href={org.link} 
                        className="hover:underline text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {org.name}
                      </Link>
                    ) : (
                      org.name
                    )}
                  </React.Fragment>
                ))}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Website
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={xLink} target="_blank" rel="noopener noreferrer">
                <XIcon className="h-4 w-4" />
                X Profile
              </Link>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <strong>Application Process:</strong> {applicationProcess}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

