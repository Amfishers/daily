<template>
    <div>
        <div v-if="dateValidateResult === 'warning'">我验证没有通过啦</div>

        <a-form-model
            ref="addAndEditForm"
            :model="form"
            :rules="rules"
            v-bind="formLayout"
        >
            <a-form-model-item
                :label="$t('日期时间')"
                prop="interviewTime"
            >
                <DateTimeRangePicker
                    v-model="form.interviewTime"
                    @ok="handleRangePicker"
                />
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cacheSelectDatarange: [],
            dateValidateResult: '',
            form: {
                interviewTime: []
            },
            rules: {
                interviewTime: [
                    {
                        required: true,
                        validator: async (rule, value, callback) => {
                            if (!value || (Array.isArray(value) && !value.length)) return callback(this.validators.messageRequired(this.$t('日期时间')))

                            //  已经完成校验不需要再进行校验一次
                            if (this.isArrayEqual(value, this.cacheSelectDatarange) && this.dateValidateResult === 'success') return callback()

                            this.dateValidateResult = 'validating'

                            const postData = {
                                //...
                            }

                            const { data } = await InterviewServices.validateInterviewTimeCross([postData])
                            this.dateValidateResult = (data && data.length) ? 'warning' : ''

                            callback()
                        },
                        trigger: ['blur']
                    }
                ],
            }
        }
    },
    methods: {
        isArrayEqual (a, b) {
            if (Array.isArray(a) && Array.isArray(b)) {
                return JSON.stringify(a) === JSON.stringify(b)
            }

            return false
        },
    },

}
</script>

<style>
</style>