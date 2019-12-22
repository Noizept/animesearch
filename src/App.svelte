<script>
  import NavBar from "./Navbar.svelte";
  import LoadingIndicator from "./LoadingIndicator.svelte";
  import Anime from "./Anime.svelte";
  import axios from "axios";
  import { getJsonFromXML } from "./parsers";

  let results = [];
  let searchKeyword = "";
  let isLoading = false;
  const listApi =
    "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~";

  async function searchAnime() {
    results = [];

    isLoading = true;
    if (!searchKeyword) return;
    let animeInfo = await axios.get(`${listApi}${searchKeyword}`, {
      "Content-Type": "text"
    });
    results = getJsonFromXML(animeInfo.data);
    console.log(results);
    isLoading = false;
  }
</script>

<NavBar />
<section class="section">
  <div class="container">
    <form on:submit|preventDefault={searchAnime}>
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            aria-label="Enter search item"
            placeholder="Search Anime"
            bind:value={searchKeyword} />
        </div>
      </div>
    </form>
  </div>
  <div class="container">
    <div class="columns is-multiline is-Desktop">
      {#if results}
        {#each results as anime}
          <Anime {anime} />
        {/each}
      {/if}

    </div>

  </div>
</section>

<div class="loading-indicator">
  {#if isLoading}
    <LoadingIndicator />
  {/if}
</div>
