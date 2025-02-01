export default {
  _id: 0,
  _uids: new Map(),
  getNewId: function () {
    return `PUID_${++this._id}`;
  },
  id: function (functionOrObject) {
    if (this._uids.has(functionOrObject)) {
      return this._uids.get(functionOrObject);
    }

    const newId = this.getNewId();

    this._uids.set(functionOrObject, newId);

    return newId;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9QVUlELmpzIl0sIm5hbWVzIjpbIl9pZCIsIl91aWRzIiwiTWFwIiwiZ2V0TmV3SWQiLCJpZCIsImZ1bmN0aW9uT3JPYmplY3QiLCJoYXMiLCJnZXQiLCJuZXdJZCIsInNldCJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNiQSxFQUFBQSxHQUFHLEVBQUUsQ0FEUTtBQUViQyxFQUFBQSxLQUFLLEVBQUUsSUFBSUMsR0FBSixFQUZNO0FBR2JDLEVBQUFBLFFBQVEsRUFBRSxZQUFXO0FBQ25CLFdBQVEsUUFBTyxFQUFFLEtBQUtILEdBQUksRUFBMUI7QUFDRCxHQUxZO0FBTWJJLEVBQUFBLEVBQUUsRUFBRSxVQUFTQyxnQkFBVCxFQUEyQjtBQUM3QixRQUFJLEtBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlRCxnQkFBZixDQUFKLEVBQXNDO0FBQ3BDLGFBQU8sS0FBS0osS0FBTCxDQUFXTSxHQUFYLENBQWVGLGdCQUFmLENBQVA7QUFDRDs7QUFFRCxVQUFNRyxLQUFLLEdBQUcsS0FBS0wsUUFBTCxFQUFkOztBQUVBLFNBQUtGLEtBQUwsQ0FBV1EsR0FBWCxDQUFlSixnQkFBZixFQUFpQ0csS0FBakM7O0FBRUEsV0FBT0EsS0FBUDtBQUNEO0FBaEJZLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIF9pZDogMCxcbiAgX3VpZHM6IG5ldyBNYXAoKSxcbiAgZ2V0TmV3SWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBgUFVJRF8keysrdGhpcy5faWR9YDtcbiAgfSxcbiAgaWQ6IGZ1bmN0aW9uKGZ1bmN0aW9uT3JPYmplY3QpIHtcbiAgICBpZiAodGhpcy5fdWlkcy5oYXMoZnVuY3Rpb25Pck9iamVjdCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl91aWRzLmdldChmdW5jdGlvbk9yT2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdJZCA9IHRoaXMuZ2V0TmV3SWQoKTtcblxuICAgIHRoaXMuX3VpZHMuc2V0KGZ1bmN0aW9uT3JPYmplY3QsIG5ld0lkKTtcblxuICAgIHJldHVybiBuZXdJZDtcbiAgfSxcbn07XG4iXX0=