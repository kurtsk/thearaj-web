<template>
  <div>
    <v-row>
      <v-col
        id="page-header"
        cols="12"
        class="elevation-6 k-anim fadeInDown"
        :style="imageUrl"
      >
        <v-row align="center" justify="center" style="min-height: 100%">
          <h1>CONTACTO</h1>
        </v-row>

        <span class="dim"></span>
      </v-col>
    </v-row>

    <div
      class="k-py-9 k-bg-white k-border-bottom k-border-top k-border-grey-30"
    >
      <v-row>
        <v-col cols="12">
          <v-container>
            <div class="" data-aos="fade-up" data-aos-duration="1500">
              <h3>¿Tiene alguna duda o sugerencia?</h3>
            </div>
            <div
              class="k-px-3 k-mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="bottom-bottom"
            >
              <p class="text-justify">
                Puede escribirnos por esta vía, le contactaremos a la brevedad
                posible.
              </p>
            </div>
          </v-container>
        </v-col>

        <v-col cols="12">
          <v-form
            ref="form"
            :model="form"
            :rules="rules"
            role="form"
            name="form"
            @submit.prevent="send()"
          >
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  data-aos-easing="ease-out-cubic"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <v-text-field
                    v-model="form.name"
                    :rules="[rules.required, rules.characters_valid]"
                    :counter="30"
                    label="Nombre completo"
                    outlined
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                  data-aos-easing="ease-out-cubic"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <v-text-field
                    v-model="form.phone"
                    :rules="[rules.required, rules.characters_numeric]"
                    :counter="30"
                    label="Teléfono"
                    outlined
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="1500"
                  data-aos-easing="ease-out-cubic"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <v-text-field
                    v-model="form.email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                    outlined
                  />
                </v-col>

                <v-col
                  cols="12"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  data-aos-easing="ease-out-cubic"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <v-textarea
                    v-model="form.message"
                    label="Comentarios"
                    :rules="[rules.required, rules.characters_valid]"
                    outlined
                  />
                </v-col>

                <v-col cols="12" class="text-end">
                  <div
                    class=""
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                  >
                    <button
                      type="submit"
                      class="
                        btn btn-md btn-border-animate btn-dark btn-font-2
                        slider-text-third
                      "
                    >
                      ENVIAR
                      <span class="top button-border" />
                      <span class="left left-bottom button-border" />
                      <span class="left left-top button-border" />
                      <span class="bottom bottom-right button-border" />
                      <span class="bottom bottom-left button-border" />
                      <span class="right button-border" />
                    </button>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Gracias..!!
              </v-card-title>

              <v-card-text class="mt-5">
                Gracias por contactarnos, en breve te responderemos
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" text @click="dialog = false">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
    <section
      class="k-py-10 border-bottom border-grey-30 elevation-light-4"
      style="background-color: #f7f7f7"
    >
      <ubicacion></ubicacion>
    </section>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com'
import Ubicacion from '~/components/home/Ubicacion'
export default {
  name: 'Contacto',

  components: { Ubicacion },

  mixins: [],

  props: {},

  data() {
    return {
      imageUrl: 'background-image: url(img/bg/the-raj-contacto.jpg)',
      dialog: false,
      form: {
        name: '',
        phone: '',
        email: '',
        comments: '',
      },
      rules: {
        required: (v) => !!v || 'Campo Requerido.',
        characters_valid: (v) =>
          /^[a-zA-Z0-9ñÑáéíóú_ -]+$/.test(v) || 'Caracteres no validos..!!',
        characters_numeric: (v) =>
          /^[0-9+()_ -]+$/.test(v) || 'Solo caracteres numéricos..!!',
        email: (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'Email no válido',
      },
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    submitForm(formName) {
      const formData = new FormData()
      formData.append('phone', this.form.phone)
      formData.append('message', this.form.message)
      formData.append('name', this.form.name)
      formData.append('email', this.form.email)

      // const url = '/mail/send'
      // console.log(url);

      // axios
      //   .post(url, formData)
      //   .then((response) => {
      //     // console.log('fino el envio');
      //     this.dialog = true
      //     this.reset()
      //     // this.formBooking.sending = 0;
      //   })
      //   .catch((error) => {
      //     // eslint-disable-next-line no-console
      //     console.log(error.response)
      //     this.modalError()
      //   })
    },
    reset() {
      this.$refs.form.reset()
    },
    // sendEmail(e) {
    //   try {
    //     emailjs.sendForm(
    //       'sendinblue',
    //       'template_xCLbnSaX',
    //       e.target,
    //       'user_IMDL8QXddWl1GCNZCdZkh',
    //       {
    //         name: this.name,
    //         email: this.email,
    //         message: this.message,
    //       }
    //     )
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.log({ error })
    //   }
    //   // Reset form field
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    // },
    async send() {
      try {
        // eslint-disable-next-line no-console
        console.log('ENVIANDO MAIL')
        await this.$mail.send({
          from: this.form.email,
          subject: 'Nuevo memsaje desde la web.',
          text: `
    	<div>I'm section one</div>
    	<div>I'm section two</div>
    	<div>${this.form.message}</div>
	`,
        })
        // eslint-disable-next-line no-console
        console.log('MAIL ENVIADO')
        this.dialog = true
        // Reset form field
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ error })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
