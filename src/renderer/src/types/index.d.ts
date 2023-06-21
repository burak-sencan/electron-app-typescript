interface Method {
  id: string
  general: {
    // Name of the method
    name: {
      custom: boolean
      customVal: boolean
      val: string
    }
    // Description of the method
    description: {
      custom: boolean
      customVal: boolean
      val: string
    }
    systemOfUnit: {
      custom: boolean
      customVal: boolean
      val: string
    }
  }
  specimen: {
    specimenLabel: {
      custom: true
      customVal: true
      val: string
    }
    specimenGeometry: {
      custom: false
      customVal: false
      val: string
    }
    specimenWidth: {
      custom: true
      customVal: true
      val: number
    }
    specimenThickness: {
      custom: true
      customVal: true
      val: number
    }
    specimenLenght: {
      custom: true
      customVal: true
      val: number
    }
  }
  testControl: {
    preload: {
      custom: boolean
      customVal: boolean
      val: boolean
    }
    preloadType: {
      custom: boolean
      customVal: boolean
      val: string
    }

    preloadValue: {
      custom: boolean
      customVal: boolean
      val: number
    }

    preloadWaitTime: {
      custom: boolean
      customVal: boolean
      val: number
    }
    testSpeed: {
      custom: boolean
      customVal: boolean
      val: number
    }
    testControlMode: {
      custom: boolean
      customVal: boolean
      val: string
    }
    testEndCriteria: {
      custom: boolean
      customVal: boolean
      val: string
    }
    testEndAction: {
      custom: boolean
      customVal: boolean
      val: string
    }
    dataRate: {
      custom: boolean
      customVal: boolean
      val: number
    }
  }
  display: {
    liveDisplaySelection: {
      custom: boolean
      customVal: boolean
      val: Array
    }
    layoutSchema: {
      custom: boolean
      customVal: boolean
      val: Array
    }
  }
}
export { Method }
