import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
const { t } = useI18n() // 国际化

// 表单校验
export const rules = reactive({
  name: [required]
})

// CrudSchema
const crudSchemas = reactive<CrudSchema[]>([
  {
    label: t('common.index'),
    field: 'id',
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    label: '组名',
    field: 'name',
    search: {
      show: true
    }
  },
  {
    label: '成员',
    field: 'memberUserIds'
  },
  {
    label: '描述',
    field: 'description'
  },
  {
    label: t('common.status'),
    field: 'status',
    dictType: DICT_TYPE.COMMON_STATUS,
    dictClass: 'number'
  },
  {
    label: '备注',
    field: 'remark',
    table: {
      show: false
    }
  },
  {
    label: t('common.createTime'),
    field: 'createTime',
    form: {
      show: false
    }
  },
  {
    label: t('table.action'),
    field: 'action',
    width: '240px',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
])
export const { allSchemas } = useCrudSchemas(crudSchemas)
