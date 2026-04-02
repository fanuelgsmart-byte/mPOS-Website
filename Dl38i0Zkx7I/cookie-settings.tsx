"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function CookieSettings() {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Strictly Necessary</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use its features.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Functional Cookies</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized functionality.
            </span>
          </Label>
          <Switch id="functional" aria-label="Functional" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Performance Cookies</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" aria-label="Performance" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}

