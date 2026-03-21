import { useEffect, useState } from "react";
import { featuredProjects } from "@/data/portfolio";

const FEATURED_NAMES = featuredProjects.map((project) => project.name);

function pickRelevantRepos(repos) {
  const featured = FEATURED_NAMES.map((name) => repos.find((repo) => repo.name === name)).filter(Boolean);

  const extra = repos
    .filter((repo) => !FEATURED_NAMES.includes(repo.name))
    .sort((left, right) => {
      const leftScore = (left.stargazers_count || 0) * 2 + new Date(left.updated_at).getTime();
      const rightScore = (right.stargazers_count || 0) * 2 + new Date(right.updated_at).getTime();
      return rightScore - leftScore;
    })
    .slice(0, 2);

  return [...featured, ...extra];
}

export function useGithubData(username) {
  const [state, setState] = useState({
    profile: null,
    repos: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    let ignore = false;

    async function loadGithub() {
      try {
        const [profileResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (!profileResponse.ok || !repoResponse.ok) {
          throw new Error("Unable to load GitHub data.");
        }

        const [profile, repos] = await Promise.all([
          profileResponse.json(),
          repoResponse.json(),
        ]);

        if (!ignore) {
          setState({
            profile,
            repos: pickRelevantRepos(repos),
            loading: false,
            error: "",
          });
        }
      } catch (error) {
        if (!ignore) {
          setState({
            profile: null,
            repos: [],
            loading: false,
            error: error.message || "Unable to load GitHub data.",
          });
        }
      }
    }

    loadGithub();

    return () => {
      ignore = true;
    };
  }, [username]);

  return state;
}


