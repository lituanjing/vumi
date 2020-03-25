<template>
  <div>
    <ym-button>默认按钮</ym-button>

    <pre>
      <code>
        {{ content }}
      </code>
    </pre>
  </div>
</template>

<script>
import YmButton from '../../../src/button'

export default {
  components: { YmButton },
  data () {
    return {
      content: `
        <ym-button>默认按钮</ym-button>
      `
    }
  }
}
</script>
