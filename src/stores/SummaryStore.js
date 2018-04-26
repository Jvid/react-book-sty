// import { EventEmitter } from "events";

function computeSummary(counterValues) {
  let summary = 0
  for(const key in counterValues) {
    if(counterValues.hasOwnProperty(key)){
      summary += counterValues[key]
    }
  }
  return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype,{
  getSummary: function () {
    return computeSummary(CounterStore.getCounterValues())
  }
})

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
  if((action.type === ActionTypes.INCREMENT) || 
     (action.type === ActionTypes.DECREMENT)) {
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange()
  }
})