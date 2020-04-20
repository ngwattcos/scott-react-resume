
export type ProfileLink = {
  url: string,
  image: string,
}

export type Month =
  '01' |
  '02' |
  '03' |
  '04' |
  '05' |
  '06' |
  '07' |
  '08' |
  '09' |
  '10' |
  '11' |
  '12' |
  'Winter' |
  'Summer';

export type Year = string;

export type StartDate = { month?: Month, year: Year };
export type EndDate = { month?: Month, year: Year };
export type Period = { start: StartDate, end?: EndDate };
export type ExperienceDetail = string

export type TagInfo = string;
export type TagColor =
  'LightRed' |
  'LightOrange' |
  'LightYellow' |
  'LightGreen' |
  'LightBlue' |
  'LightGray' |
  'DarkRed' |
  'DarkOrange' |
  'DarkYellow' |
  'DarkGreen' |
  'DarkBlue' |
  'DarkGray' |
  'White';

export type Tag = { info: string, color: TagColor };

export type Taggable = {
  tags: Tag[],
}
export type Role = {
  title: string,
  summary?: string,
  period: Period,
  details?: ExperienceDetail[];
} & Taggable

export type Experience = {
  company: string,
  location: string,
  roles: Role[],
}

export type Project = {
  name: string,
  url: string,
  location: string,
  summary?: string,
  period: Period,
  details?: ExperienceDetail[];
} & Taggable;

export type Skill = { name: string } & Taggable;

export type Major = { name: string, degree: string };

export type Resume = {
  name: string,
  tagline: string,
  contacts: { email: string, number: string, location: string },
  links: ProfileLink[],
  experiences: Experience[],
  projects: Project[],
  education: {
    school: string,
    graduation: EndDate,
    majors: Major[],
    minors?: String[],
    courses: String[],
  },
  skills: Skill[],
  hackathons: string[],
  interests: string[],
}

