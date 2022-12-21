<template>
  <form>
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Nombre</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" placeholder="Escribe aqui tu nombre" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="email"
          placeholder="tucorreo@email.com"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Asunto</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="text"
          placeholder="Escribe tu asunto"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Mensaje</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Detalla tus comentarios, sugerencias, etc..."
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary">
        Contactanos
      </button>
    </div>
  </form>
</template>
