<template>
  <div class="vee-validate">
    <h1>VeeValidate</h1>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>Table Validate</v-card-title>
            <v-card-text>
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

                <v-card-actions>
                  <v-btn @click="validate" color="primary">Validate</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-card-title>Message Override</v-card-title>
            <v-card-text>
              <v-text-field
                label="Price"
                name="price"
                v-validate="'numeric|min:2'"
                :error-messages="errors.collect('price')"
                data-vv-name="price"
                data-vv-as="Price"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-card-title>DateTime Format</v-card-title>
            <v-card-text>
              <DatetimePicker
                v-validate="'required'"
                data-vv-name="datetime"
                data-vv-as="DateTime"
                :errorMessages="errors.collect('datetime')"
                :locale="$i18n.locale"
                format="YYYY/MM/DD HH:mm:ss"
                label="Select Datetime"
                v-model="datetime"
              ></DatetimePicker>
              <!-- <v-datetime-picker :locale="$i18n.locale" label="Select Datetime" v-model="datetime"></v-datetime-picker> -->
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DatetimePicker from "@/components/DatetimePicker.vue";
export default {
  $_veeValidate: {
    validator: "new"
  },
  components: {
    DatetimePicker
  },
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
      ],
      dictionary: {
        ja: {
          messages: {
            min: field => `オーバライド min ${field}`
          }
        }
      },
      // datetime: "2017-06-30 11:05:00",
      datetime: new Date(),
      label: "Custom Component"
    };
  },
  mounted() {
    this.$i18n.locale = "ja";
    this.$validator.localize(this.$i18n.locale);
    this.$validator.localize(this.dictionary);
  },
  methods: {
    async validate() {
      let isValid = await this.$validator.validateAll();
      console.log(`isValid --> ${isValid}`);
    },
    updateDatetime: function(datetime) {
      this.datetime = datetime;
    }
  }
};
</script>
