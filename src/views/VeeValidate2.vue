<template>
  <div class="vee-validate">
    <h1>VeeValidate2</h1>

    <v-form refs="form" lazy-validation>
      <template>
        <v-simple-table height="300px">
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <v-text-field
                  name="calories"
                  v-model="item.calories"
                  v-validate="'required|numeric|min_value:0'"
                  :error-messages="errors.collect(`calories_${item.name}`)"
                  :data-vv-name="`calories_${item.name}`"
                  :data-vv-as="$t('calories')"
                ></v-text-field>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </template>

      <v-text-field
        name="price"
        v-validate="'required|numeric|min_value:0'"
        :error-messages="errors.collect('price')"
        data-vv-name="price"
        :data-vv-as="$t('calories')"
      ></v-text-field>
      <v-btn @click="validate" color="primary">Validate</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {},
  data: () => {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        }
      ]
    };
  },
  mounted() {
    this.$validator.localize(this.$i18n.locale);
  },
  methods: {
    async validate() {
      let isValid = await this.$validator.validateAll();
      console.log(`isValid --> ${isValid}`);
    }
  }
};
</script>
