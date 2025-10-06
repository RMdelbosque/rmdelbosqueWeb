import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GithubRepo } from '../interfaces/github_repo.interface';

// export interface GithubRepo {
//   name: string;
//   description: string;
//   html_url: string;
//   language: string;
//   fork: boolean;
//   updated_at: string;
// }

const GITHUB_KEY = 'gitrepo';

const loadFromLocalStorage = () => {
  const githubrepoFromLocalStorage = localStorage.getItem(GITHUB_KEY) ?? '[]';
  const repos = JSON.parse(githubrepoFromLocalStorage);
  console.log(repos);
  return repos;
};

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://api.github.com/users';
  private readonly username = 'RMdelbosque'; // 👈 cámbialo

  gihubRepos = signal<GithubRepo[]>([]);
  gihubReposLoading = signal(true);

  searchHistory = signal<Record<string, GithubRepo[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadGitHubRepos();
  }

  saveReposToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gitrepo', historyString);
  })

  loadGitHubRepos(){
    const headers = new HttpHeaders({
      Authorization: 'GIT_TOKEN'
    });
    this.http.get<GithubRepo[]>(`${this.API_URL}/${this.username}/repos?sort=updated`, {headers}).subscribe({
      next: (resp) => {
      this.gihubRepos.set(resp);
      this.gihubReposLoading.set(false);
    console.info(resp)},
      error: (err) => {
        console.error('Error al cargar los repos:', err);
        this.gihubReposLoading.set(false);
      }
    });
  }

  getHistoryGitHubRepos(query: string ) {
    return this.searchHistory()[query] ?? [];
  }
}
