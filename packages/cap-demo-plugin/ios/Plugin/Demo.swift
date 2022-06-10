import Foundation

@objc public class Demo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
