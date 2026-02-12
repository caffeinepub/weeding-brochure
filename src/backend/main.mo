import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Int "mo:core/Int";

actor {
  type CustomizationRequest = {
    timestamp : Time.Time;
    designIdentifier : ?Text;
    details : Text;
  };

  module CustomizationRequest {
    public func compareByTimestamp(request1 : CustomizationRequest, request2 : CustomizationRequest) : Order.Order {
      Int.compare(request1.timestamp, request2.timestamp);
    };
  };

  let requests = Map.empty<Text, CustomizationRequest>();

  // Submit a new customization request
  public shared ({ caller }) func submitRequest(id : Text, designIdentifier : ?Text, details : Text) : async () {
    if (requests.containsKey(id)) { Runtime.trap("Request already exists for given id") };
    let request : CustomizationRequest = {
      timestamp = Time.now();
      designIdentifier;
      details;
    };
    requests.add(id, request);
  };

  public query ({ caller }) func getRequest(id : Text) : async CustomizationRequest {
    switch (requests.get(id)) {
      case (null) { Runtime.trap("Request does not exist") };
      case (?request) { request };
    };
  };

  // Get all requests sorted by most recent first
  public query ({ caller }) func getAllRequestsByTimestamp() : async [CustomizationRequest] {
    requests.values().toArray().sort(
      CustomizationRequest.compareByTimestamp
    );
  };
};
