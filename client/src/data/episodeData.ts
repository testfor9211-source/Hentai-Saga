export interface Episode {
  number: number;
  title: string;
  date: string;
  thumbnail: string;
  duration: string;
  downloadLinks: string[];
}

export const episodeThumbnails: Record<string, string> = {
  "1": "https://yavuzceliker.github.io/sample-images/image-5.jpg",
  "2": "https://yavuzceliker.github.io/sample-images/image-6.jpg",
  "3": "https://yavuzceliker.github.io/sample-images/image-7.jpg",
};

export const episodes: Episode[] = [
  {
    number: 1,
    title: "Episode 1",
    date: "February 6, 2025",
    thumbnail: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
    duration: "23:45",
    downloadLinks: [
      "https://download1.example.com/ep1",
      "https://download2.example.com/ep1",
      "https://download3.example.com/ep1",
      "https://download4.example.com/ep1",
      "https://download5.example.com/ep1",
    ],
  },
  {
    number: 2,
    title: "Episode 2",
    date: "February 13, 2025",
    thumbnail: "https://yavuzceliker.github.io/sample-images/image-6.jpg",
    duration: "24:12",
    downloadLinks: [
      "https://download1.example.com/ep2",
      "https://download2.example.com/ep2",
      "https://download3.example.com/ep2",
      "https://download4.example.com/ep2",
      "https://download5.example.com/ep2",
    ],
  },
  {
    number: 3,
    title: "Episode 3",
    date: "February 20, 2025",
    thumbnail: "https://yavuzceliker.github.io/sample-images/image-7.jpg",
    duration: "24:30",
    downloadLinks: [
      "https://download1.example.com/ep3",
      "https://download2.example.com/ep3",
      "https://download3.example.com/ep3",
      "https://download4.example.com/ep3",
      "https://download5.example.com/ep3",
    ],
  },
];
