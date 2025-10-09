let bookId = 0;
const books = [
  {
    id: bookId++,
    title:
      "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
    authors: ["Neil Gaiman", "Terry Pratchett"],
    genre: ["fantasy", "horror", "comedy"],
    type: "Novel",
    release_date: "May 1, 1990",
    page_count: 288,
    cover_image: "",
    publishers: ["Gollancz (UK)", "Workman (US)"],
    description:
      "According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (the world's only completely accurate book of prophecies, written in 1655, before she exploded), the world will end on a Saturday. Next Saturday, in fact. Just before dinner. So the armies of Good and Evil are amassing, Atlantis is rising, frogs are falling, tempers are flaring. Everything appears to be going according to Divine Plan. Except a somewhat fussy angel and a fast-living demon—both of whom have lived amongst Earth's mortals since The Beginning and have grown rather fond of the lifestyle—are not actually looking forward to the coming Rapture. And someone seems to have misplaced the Antichrist...",
  },
  {
    id: bookId++,
    title: "Good Omens: The Official (and Ineffable) Graphic Novel",
    authors: ["Neil Gaiman", "Terry Pratchett", "Colleen Doran"],
    genre: ["fantasy", "horror", "comedy"],
    type: "Graphic Novel",
    release_date: "Spring 2025",
    page_count: 186,
    cover_image:
      "https://static.wikia.nocookie.net/good-omens/images/5/55/Good_Omens_The_Official_%28and_Ineffable%29_Graphic_Novel_Banner.jpg/revision/latest?cb=20230830055947",
    publishers: [],
    description:
      "An upcoming graphic novel using the written work of Terry Pratchett and Neil Gaiman, paired with Colleen Doran's artwork. It is an adaptation of Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch.",
  },
];

// const Novel = {
// title: "",
// authors: [],
// genre: [],
// type: "",
// release_date: "",
// page_count: 186,
// cover_image: "",
// publishers:[],
// description:""
// }

module.exports = books;
