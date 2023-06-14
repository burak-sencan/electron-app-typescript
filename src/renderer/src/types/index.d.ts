interface Method {
  id: string
  definations: {
    name: {
      custom: boolean
      customVal: boolean
      val: string
    }
    defination: {
      custom: boolean
      customVal: boolean
      val: string
    }
  }
  physicalProperties: {
    width: {
      custom: boolean
      customVal: boolean
      val: string
    }
    radious: {
      custom: boolean
      customVal: boolean
      val: string
    }
  }
  calculations: {
    elengation: {
      custom: boolean
      customVal: boolean
      val: number
    }
    lastHeight: {
      custom: boolean
      customVal: boolean
      val: number
    }
  }
  testEnd: {
    break: {
      custom: boolean
      customVal: boolean
      val: number
    }
    lastLoad: {
      custom: boolean
      customVal: boolean
      val: number
    }
  }
}
export { Method }
