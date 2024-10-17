import Link from "next/link";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { notes, Note } from "@/lib/mockNoteData";

export function Notes() {
  return (
    <div>
      <p className="text-3xl font-bold">Notes</p>
      <p className="my-5">Your notes:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          notes.map((note: Note, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
                <CardDescription>Tags: {note.tags.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                {note.content.length > 100 ? `${note.content.substring(0, 100)}...` : note.content}
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-2">
                <CardDescription className="text-sm">Last modified: {formatDistanceToNow(note.lastModified, { addSuffix: true })}</CardDescription>
                <Button asChild>
                  <Link href={`/notes/${note.id}`}>
                    Open Note
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}