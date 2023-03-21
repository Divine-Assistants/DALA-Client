type Courses = {
  courseTitle: string;
  courseNumber?: number;
};

type coursesType = {
  title: string;
  contentList: Array<Courses>;
};

const courses: Array<coursesType> = [
  {
    title: "Course Categories",
    contentList: [
      {
        courseTitle: "Administrative and Business Management",
        courseNumber: 2,
      },
      {
        courseTitle: "Sales Training",
        courseNumber: 5,
      },
      {
        courseTitle: "Project Management",
        courseNumber: 5,
      },
      {
        courseTitle: "Web Design and Development",
        courseNumber: 4,
      },
      {
        courseTitle: "Digital Marketing",
        courseNumber: 9,
      },
    ],
  },
  {
    title: "Elective Courses",
    contentList: [
      {
        courseTitle: "Canva",
      },
      {
        courseTitle: "Workplace Guide",
      },
      {
        courseTitle: "Communication Skills",
      },
      {
        courseTitle: "Time Management",
      },
      {
        courseTitle: "Microsoft 365",
      },
      {
        courseTitle: "Learning Niile",
      },
      {
        courseTitle: "Learning mindset/skills",
      },
    ],
  },
  {
    title: "Course Instructors",
    contentList: [
      {
        courseTitle: "James  Dean",
      },
      {
        courseTitle: "Laura Michaels",
      },
      {
        courseTitle: "Barisua George",
      },
      {
        courseTitle: "Nyesome Rita",
      },
      {
        courseTitle: "Gratta Orji",
      },
      {
        courseTitle: "Jumoke Nadia",
      },
      {
        courseTitle: "Selah Ahmed",
      },
    ],
  },
  {
    title: "Level",
    contentList: [
      {
        courseTitle: "All Levels",
      },
      {
        courseTitle: "Beginner",
      },
      {
        courseTitle: "Intermediate",
      },
      {
        courseTitle: "Expert",
      },
    ],
  },
  {
    title: "Price",
    contentList: [
      {
        courseTitle: "$100 - $200",
      },
      {
        courseTitle: "$200 - $300",
      },
      {
        courseTitle: "$400 - $500",
      },
      {
        courseTitle: "$600 - $700",
      },
      {
        courseTitle: "$800 - $900",
      },
      {
        courseTitle: "$1000",
      },
    ],
  },
];

export { courses };
