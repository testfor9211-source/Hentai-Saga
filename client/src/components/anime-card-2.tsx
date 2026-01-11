import { Play, Star, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Show } from "@/hooks/use-shows";

interface AnimeCardProps {
  show: Show;
}

export function AnimeCard2({ show }: AnimeCardProps) {
  return (
    <div className="group relative w-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <img 
          src={show.image_url} 
          alt={show.title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
            <Play className="h-8 w-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {show.series_type && (
            <Badge className={`${
              show.series_type === 'Censored' ? 'bg-blue-500/90 hover:bg-blue-500' : 'bg-red-500/90 hover:bg-red-500'
            } text-white border-none text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider`}>
              {show.series_type === 'Censored' ? 'Cen' : 'Uncen'}
            </Badge>
          )}
          <Badge className="bg-primary/90 hover:bg-primary text-white border-none text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
            {show.originality}
          </Badge>
          <Badge className="bg-green-500/90 hover:bg-green-500 text-white border-none text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
            EP {show.total_episodes}
          </Badge>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-white">{show.rating}</span>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-primary transition-colors font-ui text-lg">
          {show.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {show.time}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {show.years}
          </span>
        </div>
      </div>
    </div>
  );
}
