package com.believe.bike.api.approval;

import com.believe.bike.core.utils.GeneralUtils;
import lombok.Getter;
import org.axonframework.common.Assert;
import org.hibernate.validator.constraints.NotBlank;

import java.io.Serializable;

/**
 * <p> The describe </p>
 *
 * @author Li Xingping
 */
@Getter
public class ApprovalId implements Serializable {

  @NotBlank
  protected final String identifier;

  public ApprovalId() {
    this.identifier = GeneralUtils.id();
  }

  public ApprovalId(String identifier) {
    Assert.notNull(identifier, () -> "Identifier may not be null");
    this.identifier = identifier;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    ApprovalId that = (ApprovalId) o;
    return identifier.equals(that.identifier);
  }

  @Override
  public int hashCode() {
    return this.identifier.hashCode();
  }

  @Override
  public String toString() {
    return this.identifier;
  }

}
