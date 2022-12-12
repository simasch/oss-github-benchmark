import { ObjectId } from "mongodb";

export interface CrawlerConfig {
  name: string,
  value: CrawlerSector[];
}

export interface CrawlerSector {
  name_de: string;
  institutions: CrawlerInstitution[];
}

export interface CrawlerInstitution {
  uuid: string;
  shortname: string;
  name_de: string;
  orgs: string[];
}

export interface CrawlerUsersNew {
  _id: ObjectId;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  twitter_username: string;
  created_at: Date;
  updated_at: Date;
  contributions: any[];
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  orgs: string[];
}

export interface CrawlerOrg {
  status: number,
  url: string,
  headers: any[],
  data: CrawlerOrgData,
}

export interface CrawlerOrgData{
  login: string,
  id: number,
  node_id: string,
  url: string,
  repos_url: string,
  events_url: string,
  hooks_url: string,
  issues_url: string,
  members_url: string,
  public_members_url: string,
  avatar_url: string,
  description: string,
  name: string,
  company: object,
  blog: string,
  location: string,
  email: string,
  twitter_username: object,
  is_verified: boolean,
  has_organization_projects: boolean,
  has_repository_projects: boolean,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  html_url: string,
  created_at: Date,
  updated_at: Date,
  type: string
}

export interface OrgData{
  name: string;
  url: string;
  description: string;
  num_members: number;
  num_repos: number;
  avatar: string;
  created_at: Date;
  location: string;
  email: string;
  repos: string[];
  repo_names: string[];
  total_licenses: object;
}



export interface PythonInstitution {
  uuid: string;
  shortname: string;
  name_de: string;
  org_names: any[];
  orgs: any[];
  num_orgs: number;
  avatar: any[];
  repos: any[];
  repo_names: any[];
  total_licenses: any;
  timestamp: Date;
  num_repos: any;
  num_members: any;
  total_num_contributors: any;
  total_num_own_repo_forks: any;
  total_num_forks_in_repos: any;
  total_num_commits: any;
  total_pull_requests: any;
  total_issues: any;
  total_num_stars: any;
  total_num_watchers: any;
  total_pull_requests_all: any;
  total_pull_requests_closed: any;
  total_issues_all: any;
  total_issues_closed: any;
  total_comments: any;
  stats: PythonInstitutionStats[];
}

export interface PythonInstitutionStats {
  timestamp: Date;
  num_repos: number;
  num_members: number;
  total_num_contributors: any;
  total_num_own_repo_forks: any;
  total_num_forks_in_repos: any;
  total_num_commits: any;
  total_pull_requests: any;
  total_issues: any;
  total_num_stars: any;
  total_num_watchers: any;
  total_pull_requests_all: any;
  total_pull_requests_closed: any;
  total_issues_all: any;
  total_issues_closed: any;
  total_comments: any;
}

export interface PythonRepositories {
  name: 'cloud-native-spa';
  uuid: '210df24f-6c14-4e8c-aff9-b65e11b3ecdb';
  url: 'https://github.com/3AP-AG/cloud-native-spa';
  institution: '3ap';
  organization: '3AP-AG';
  description: string;
  fork: false;
  archived: false;
  num_forks: 0;
  num_contributors: 1;
  num_commits: 4;
  num_stars: 0;
  num_watchers: 3;
  commit_activities: any[];
  has_own_commits: any;
  issues_closed: 0;
  issues_all: 0;
  pull_requests_closed: 0;
  pull_requests_all: 0;
  comments: 0;
  languages: any[];
  timestamp: Date;
  createdTimestamp: 0;
  updatedTimestamp: 0;
  logo: any;
  contributors: any[];
  coders: any[];
  license: any;
}