<script>
	import NavBar from "./Navbar.svelte"
	import LoadingIndicator from "./LoadingIndicator.svelte"
	import axios from "axios"
	import {getMainIdsFromXML , getAnimeJsons} from "./parsers"

	let results =[]
	let searchKeyword=''
	let isLoading =false
	const listApi ="http://anisearch.outrance.pl/?task=search&query="
	const animeInfoApi="http://api.anidb.net:9001/httpapi?client=svelteanime&clientver=1&protover=1&request=anime&aid="

	async function searchAnime(){
		isLoading=true
		if(!searchKeyword) return
		let dataResults = await axios({
			method: 'get',
			url: `${listApi}${searchKeyword}`,
			 responseType: 'text'})
		
		const animeIDS = getMainIdsFromXML(dataResults.data)
		
		animeIDS.forEach(async (ID)=>{
			let animeInfo = await axios.get(`${animeInfoApi}${ID}`,{
				'Content-Type': 'text',
			})
				
				getAnimeJsons(animeInfo.data)
			})

		isLoading=false
	}

</script>


<NavBar />
<section class="section">
    <div class="container">
      <form on:submit|preventDefault={searchAnime}>
			<div class="field">
				<div class="control">
					<input class="input is-primary" type="text" aria-label="Enter search item" placeholder="Search Anime" bind:value={searchKeyword}>
				</div>
			</div>
		</form>
    </div>
  </section>



  <div class="loading-indicator">
		{#if isLoading}
			<LoadingIndicator />
		{/if}
  </div>
