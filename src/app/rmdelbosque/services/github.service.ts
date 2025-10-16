import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRepo } from '../interfaces/github_repo.interface';

const GITHUB_KEY = 'gitrepo';
const loadFromLocalStorage = () => {
  const githubrepoFromLocalStorage = localStorage.getItem(GITHUB_KEY) ?? '[]';
  const repos = JSON.parse(githubrepoFromLocalStorage);
  console.log(repos); return repos;
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
  loadGitHubRepos() {
    const allowedRepos = ['rmdelbosqueWeb', 'game-2048', '03-gifs-app', 'Spring-Boot-Films'];
    this.http.get<GithubRepo[]>('https://api.github.com/users/RMdelbosque/repos?sort=updated').subscribe({
      next: (resp) => { // 🔹 Filtramos sólo los repos permitidos
        const filtered = resp.filter(repo => allowedRepos.includes(repo.name)); this.gihubRepos.set(filtered); this.gihubReposLoading.set(false); console.info('Repos filtrados:', filtered);
      }, error: (err) => { console.error('Error al cargar los repos:', err); this.gihubReposLoading.set(false); }
    });
  } getHistoryGitHubRepos(query: string) { return this.searchHistory()[query] ?? []; }
}
