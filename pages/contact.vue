<template>
  <div>
    <page-indicator page-name="Contact" :pathway="pathway" />
    <google-maps />
    <div class="background-pattern">
      <div class="container py-4">
        <h2 class="text-3xl text-gray-base text-center font-baumans">
          Nous sommes au plus près des demandes de nos clients
        </h2>
        <h3 class="text-gray-base text-center text-md">
          professionnels ou particuliers nous avons des solutions adaptée à tous vos besoins.
        </h3>
      </div>
      <div class="container flex flex-row flex-wrap">
        <div class="w-full md:w-1/2">
          <contact-form />
        </div>
        <div class="w-full pl-24 md:w-1/2">
          <div class="flex mx-4 flex-row my-5">
            <svg class="w-16 text-bmg-green-darken-10 fill-current" viewBox="0 0 512 512"><path d="M469.333 64H42.667C19.135 64 0 83.135 0 106.667v298.667C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333V106.667C512 83.135 492.865 64 469.333 64zM42.667 85.333h426.667c1.572 0 2.957.573 4.432.897-36.939 33.807-159.423 145.859-202.286 184.478-3.354 3.021-8.76 6.625-15.479 6.625s-12.125-3.604-15.49-6.635C197.652 232.085 75.161 120.027 38.228 86.232c1.478-.324 2.866-.899 4.439-.899zm-21.334 320V106.667c0-2.09.63-3.986 1.194-5.896 28.272 25.876 113.736 104.06 169.152 154.453C136.443 302.671 50.957 383.719 22.46 410.893c-.503-1.814-1.127-3.588-1.127-5.56zm448 21.334H42.667c-1.704 0-3.219-.594-4.81-.974 29.447-28.072 115.477-109.586 169.742-156.009 7.074 6.417 13.536 12.268 18.63 16.858 8.792 7.938 19.083 12.125 29.771 12.125s20.979-4.188 29.76-12.115c5.096-4.592 11.563-10.448 18.641-16.868 54.268 46.418 140.286 127.926 169.742 156.009-1.591.38-3.104.974-4.81.974zm21.334-21.334c0 1.971-.624 3.746-1.126 5.56-28.508-27.188-113.984-108.227-169.219-155.668 55.418-50.393 140.869-128.57 169.151-154.456.564 1.91 1.194 3.807 1.194 5.897v298.667z" /></svg>
            <div class="ml-4">
              <h2 class="font-baumans text-2xl">
                E-mail
              </h2>
              <span class="text-sm">contact@bmgraphic.com</span>
            </div>
          </div>
          <div class="flex mx-4 flex-row my-5">
            <svg
              class="w-16 text-bmg-green-darken-10 fill-current"
              viewBox="0 0 512.021 512.021"
            >
              <path d="M367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795S34.389 263.572 8.744 192.974c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5C97.2 5.738 120.167 0 144.423 0c7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.838-3.837 9.361-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zM131.639 32.7c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132C88.125 317.775 194.246 423.896 329.972 473.2c34.641 12.584 71.866 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z" />
            </svg>
            <!-- <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> -->
            <div class="ml-4">
              <h2 class="font-baumans text-2xl">
                Téléphone
              </h2>
              <span class="text-sm">0560 89 16 49</span>
            </div>
          </div>
          <div class="flex mx-4 flex-row my-5">
            <svg
              class="w-16 text-bmg-green-darken-10"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <div class="ml-4">
              <h2 class="font-baumans text-2xl">
                Adresse
              </h2>
              <span class="text-sm" v-text="this.$globalVars().address" />
            </div>
          </div>
          <div class="flex mx-4 flex-row my-5">
            <svg class="w-16 text-bmg-green-darken-10 fill-current" viewBox="0 0 443.294 443.294">
              <path d="M221.647 0C99.433 0 0 99.433 0 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647S343.861 0 221.647 0zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" /><path d="M235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
            <div class="ml-4">
              <h2 class="font-baumans text-2xl">
                Horaire
              </h2>
              <span class="text-sm">de 8h à 17h du dimanche au jeudi</span>
            </div>
          </div>
          <div class="flex mx-4 flex-row my-5">
            <svg class="w-16 text-bmg-green-darken-10 fill-current" viewBox="0 0 511.072 511.072">
              <path d="M74.39 480.536H38.177l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425C-2.04 277.611-3.811 238.37 6.932 199.776c12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z" />
            </svg>
            <div class="ml-4">
              <h2 class="font-baumans text-2xl">
                Appel d'urgence
              </h2>
              <span class="text-sm" v-text="this.$globalVars().phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageIndicator from '~/components/global/pageIndicator'
import googleMaps from '~/components/sub/google-maps'
import contactForm from '~/components/contactForm'
export default {
  components: {
    'page-indicator': pageIndicator,
    'google-maps': googleMaps,
    'contact-form': contactForm
  },
  data () {
    return {
      pathway: [
        {
          name: 'Home',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style>
.background-pattern{
  background: url('~assets/images/pattern.png') repeat;
}
</style>
