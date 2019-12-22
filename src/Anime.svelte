<script>
  export let anime;
</script>

<div class="column is-one-quarter">
  <div class="card">
    <div class="card-image">
      <figure class="image is-141x200">
        <img src={anime.Picture} alt="Thumbnail" width="141" height="200" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">

        <div class="media-content">
          <p class="title is-6">{anime.Name}</p>
          <p class="subtitle is-6" style="color:red">{anime.Description} лв.</p>

        </div>
      </div>

    </div>
  </div>
</div>
